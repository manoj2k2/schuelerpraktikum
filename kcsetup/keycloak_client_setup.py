from keycloak import KeycloakAdmin
from keycloak.exceptions import KeycloakGetError

# Configuration from appsettings.json
KEYCLOAK_URL = "https://localhost:8443/"
REALM_NAME = "schuelerpraktikum"
CLIENT_ID = "schuelerpraktikum-backend"
CLIENT_SECRET = "FNCfulHu0UGCVl97B4eY2JWIbMUrp2l5" # This should ideally be an environment variable or fetched securely

# Keycloak admin credentials (replace with your actual admin credentials)
ADMIN_USERNAME = "admin"
ADMIN_PASSWORD = "admin"

keycloak_admin = KeycloakAdmin(
    server_url=KEYCLOAK_URL,
    username=ADMIN_USERNAME,
    password=ADMIN_PASSWORD,
    realm_name="master", # Admin operations are typically done in the master realm
    verify=False
)

def setup_keycloak_client():
    try:
        # Get or create realm
        realms = keycloak_admin.get_realms()
        realm_exists = False
        for r in realms:
            if r['realm'] == REALM_NAME:
                realm_exists = True
                break

        if not realm_exists:
            print(f"Realm '{REALM_NAME}' not found. Creating it...")
            keycloak_admin.create_realm({"realm": REALM_NAME, "enabled": True})
            print(f"Realm '{REALM_NAME}' created.")
        else:
            print(f"Realm '{REALM_NAME}' already exists.")

        # Ensure the admin client is authenticated for the target realm
        keycloak_admin.realm_name = REALM_NAME
        

        # Get or create client
        clients = keycloak_admin.get_clients()
        found_client = None
        for client_item in clients:
            if client_item.get("clientId") == CLIENT_ID:
                found_client = client_item
                break

        if found_client:
            client = found_client
            print(f"Client '{CLIENT_ID}' already exists. Updating it...")
            keycloak_admin.update_client(
                client_id=client["id"],
                payload={
                    "clientId": CLIENT_ID,
                    "secret": CLIENT_SECRET,
                    "enabled": True,
                    "serviceAccountsEnabled": True,
                    "publicClient": False,
                    "bearerOnly": False,
                    "standardFlowEnabled": False,
                    "directAccessGrantsEnabled": False,
                    "implicitFlowEnabled": False,
                }
            )
            print(f"Client '{CLIENT_ID}' updated.")
        else:
            print(f"Client '{CLIENT_ID}' not found. Creating it...")
            client = keycloak_admin.create_client(
                payload={
                    "clientId": CLIENT_ID,
                    "secret": CLIENT_SECRET,
                    "enabled": True,
                    "serviceAccountsEnabled": True,
                    "publicClient": False,
                    "bearerOnly": False,
                    "standardFlowEnabled": False,
                    "directAccessGrantsEnabled": False,
                    "implicitFlowEnabled": False,
                }
            )
            print(f"Client '{CLIENT_ID}' created.")

        # Get client ID (UUID)
        clients = keycloak_admin.get_clients()
        client_uuid = None
        for client_item in clients:
            if client_item.get("clientId") == CLIENT_ID:
                client_uuid = client_item["id"]
                break
        if not client_uuid:
            raise Exception(f"Could not find client UUID for {CLIENT_ID}")

        # Enable service account user roles
        service_account_user = keycloak_admin.get_client_service_account_user(client_uuid)
        print(f"Service account user for '{CLIENT_ID}': {service_account_user['username']}")

        # Assign a realm role to the service account (example: 'offline_access')
        # You might want to create custom roles for your backend
        try:
            offline_access_role = keycloak_admin.get_realm_role("offline_access")
            keycloak_admin.assign_realm_roles_to_user(
                user_id=service_account_user["id"],
                roles=[
                    {
                        "id": offline_access_role["id"],
                        "name": offline_access_role["name"]
                    }
                ]
            )
            print(f"Assigned 'offline_access' realm role to service account of client '{CLIENT_ID}'.")
        except KeycloakGetError as e:
            print(f"Could not assign 'offline_access' role: {e}")

        # Example: Create a custom client role for the backend
        try:
            role_name = "backend-access"
            keycloak_admin.create_client_role(client_uuid=client_uuid, payload={"name": role_name})
            print(f"Client role '{role_name}' created for client '{CLIENT_ID}'.")
        except KeycloakGetError as e:
            if "conflict" in str(e).lower():
                print(f"Client role '{role_name}' already exists for client '{CLIENT_ID}'.")
            else:
                print(f"Error creating client role '{role_name}': {e}")

        print("\nKeycloak client setup complete!")

    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    setup_keycloak_client()
