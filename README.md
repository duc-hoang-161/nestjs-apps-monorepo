# NestJS Apps Monorepo

A well-structured NX monorepo for NestJS applications with shared modules and utilities.

## 🏗️ Project Structure

```
├── api-app/                 # Main API application
├── admin-app/              # Admin panel application
├── shared-common/          # Shared common modules (services, configurations)
├── shared-utils/           # Shared utility functions and types
└── nx.json                 # NX workspace configuration
```

## 🚀 Features

- **NX Monorepo**: Efficient build system with caching and dependency graph
- **Multiple NestJS Apps**: Separate applications for different purposes
- **Shared Libraries**: Reusable modules and utilities across applications
- **TypeScript**: Full TypeScript support with path mapping
- **Hot Reload**: Development mode with automatic rebuilding

## 📦 Applications

### API App (`api-app`)
Main API service that demonstrates usage of shared modules.

**Features:**
- Database configuration service integration
- Logging service usage  
- Email validation utilities
- Standardized API responses

### Admin App (`admin-app`)
Administrative panel service showcasing shared utilities.

**Features:**
- Database configuration service integration
- Logging service usage
- UUID generation utilities
- Text slugification utilities
- Standardized API responses

## 🔧 Shared Libraries

### `shared-common`
Common NestJS modules and services:
- **DatabaseConfigService**: Centralized database configuration
- **LoggingService**: Consistent logging across applications

### `shared-utils`
Pure utility functions and types:
- **Email validation**: `isValidEmail()`
- **Date formatting**: `formatDate()`
- **UUID generation**: `generateUUID()`
- **Text slugification**: `slugify()`
- **Deep cloning**: `deepClone()`
- **API response types**: Standardized response interfaces

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
```bash
npm install
```

### Development

#### Start API Application
```bash
npm run serve:api
# or
nx serve api-app
```
The API will be available at `http://localhost:3000/api`

#### Start Admin Application
```bash
npm run serve:admin
# or
nx serve admin-app
```
The Admin app will be available at `http://localhost:3000/api`

### Building

#### Build All Applications
```bash
npm run build
```

#### Build Specific Application
```bash
npm run build:api
npm run build:admin
```

### Other Commands

#### View Project Graph
```bash
npm run graph
# or
nx graph
```

#### Generate New Application
```bash
nx g @nx/nest:app my-new-app
```

#### Generate New Library
```bash
nx g @nx/nest:lib my-shared-lib
```

## 🏗️ Usage Examples

### Using Shared Services

```typescript
import { Injectable } from '@nestjs/common';
import { DatabaseConfigService, LoggingService } from 'shared-common';

@Injectable()
export class MyService {
  constructor(
    private readonly dbConfig: DatabaseConfigService,
    private readonly logger: LoggingService,
  ) {}

  async getData() {
    this.logger.log('Fetching data', 'MyService');
    const config = this.dbConfig.getConfig();
    // Use database configuration...
  }
}
```

### Using Shared Utilities

```typescript
import { createSuccessResponse, isValidEmail, generateUUID } from 'shared-utils';

export class MyController {
  @Get()
  getData() {
    return createSuccessResponse({
      id: generateUUID(),
      email: 'test@example.com',
      emailValid: isValidEmail('test@example.com'),
    });
  }
}
```

## 🔄 Adding New Shared Functionality

1. **For NestJS modules/services**: Add to `shared-common`
2. **For pure utilities**: Add to `shared-utils`
3. Export new functionality from the respective `index.ts` files
4. Import and use in your applications

## 📝 Development Workflow

1. **Make changes** to shared libraries or applications
2. **Build** to ensure everything compiles correctly
3. **Test** by running the applications
4. **Commit** your changes

The monorepo structure ensures that:
- Shared code changes automatically affect all consuming applications
- TypeScript provides compile-time safety across project boundaries
- NX optimizes builds by only rebuilding what's necessary

## 🤝 Contributing

1. Create a new branch for your feature
2. Make your changes in the appropriate shared library or application
3. Ensure all applications build successfully
4. Test your changes by running the affected applications
5. Submit a pull request

## 📄 License

ISC
