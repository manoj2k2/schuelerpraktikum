FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
# Copy the .csproj file and restore dependencies
COPY backend/*.csproj ./
RUN dotnet restore

# Copy the rest of the application code
COPY backend/. .

# Build the application
RUN dotnet publish -c Release -o /app/out

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
COPY --from=build /app/out .
ENTRYPOINT ["dotnet", "backend.dll"]
