# Schülerpraktikum Platform

This document outlines the development plan and technology choices for the Schülerpraktikum Platform.

## Technology Stack

*   **Frontend**: Angular
*   **UI Library**: PrimeNG
*   **Backend**: C# .NET Core
*   **Database**: PostgreSQL
*   **API**: GraphQL (Hot Chocolate)
*   **Authentication**: Keycloak (for Identity and Access Management)
*   **Hosting**: AWS (or similar cloud provider)
*   **Version Control**: Git & GitHub

## Development Plan

### Phase 1: Project Setup & MVP Core

1.  **Initialize Project**: 
    *   Set up a Git repository.
    *   Create a monorepo structure with `frontend` and `backend` directories.
2.  **Backend Setup (.NET Core)**:
    *   Initialize the .NET Core Web API project.
    *   Set up Entity Framework Core to connect to the PostgreSQL database.
    *   Define database models: `Student`, `SME`, `Internship`, `Application`.
    *   Set up Hot Chocolate to create the GraphQL API.
    *   Integrate with Keycloak for authentication and authorization.
3.  **Frontend Setup (Angular)**:
    *   Initialize the Angular project using the Angular CLI.
    *   Set up PrimeNG.
    *   Implement login flow to redirect to Keycloak for authentication.
    *   Create a dashboard layout for the Student and SME portals.

### Phase 2: Feature Implementation

1.  **Student Portal**:
    *   Profile creation and management.
    *   Internship search with filters (location, industry).
    *   Application submission and tracking.
2.  **SME Portal**:
    *   Company profile creation.
    *   Create and manage internship listings.
    *   View and manage incoming applications.

### Phase 3: School & Admin Features

1.  **School Dashboard**:
    *   Dashboard for teachers to monitor student progress.
    *   Functionality to approve/reject internships.
2.  **Admin Panel**:
    *   Develop a dedicated admin interface or extend the platform's functionality for user management and content moderation.

### Phase 4: Deployment & Growth

1.  **Deployment**:
    *   Containerize the application using Docker.
    *   Set up a CI/CD pipeline with GitHub Actions.
    *   Deploy to staging and production environments.
2.  **Growth Features**:
    *   Implement analytics and reporting.
    *   Develop features for monetization (freemium/subscriptions).

## Next Steps

*   Initialize the Git repository.
*   Set up a Keycloak instance for development (e.g., using Docker).
*   Set up the `backend` .NET Core project.
*   Set up the `frontend` Angular project.
