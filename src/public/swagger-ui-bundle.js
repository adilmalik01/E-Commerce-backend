window.onload = function () {
    // Build a system
    var url = window.location.search.match(/url=([^&]+)/);
    if (url && url.length > 1) {
        url = decodeURIComponent(url[1]);
    } else {
        url = window.location.origin;
    }
    var options = {
        swaggerDoc: {
            swagger: "2.0",
            info: {
                description:
                    "This is a salon service server. You can find out more at [https://epacken.com](https://epacken.com). For this sample, you can use the api key `special-key` to test the authorization filters.",
                version: "1.0.6",
                title: "SalonPro API Docs v(0.0.1)",
                termsOfService: "http://epackensalon.com/terms/",
                contact: {
                    email: "salon-api-team@epacken.com",
                },
                license: {
                    name: "Apache 2.0",
                    url: "http://www.apache.org/licenses/LICENSE-2.0.html",
                },
            },
            host: "saloon-backend-nine.vercel.app",
            basePath: "/api/v1",
            securityDefinitions: {
                api_key: {
                    type: "apiKey",
                    name: "api_key",
                    in: "header",
                },
                petstore_auth: {
                    type: "oauth2",
                    authorizationUrl:
                        "https://petstore.swagger.io/oauth/authorize",
                    flow: "implicit",
                    scopes: {
                        "read:pets": "read your pets",
                        "write:pets": "modify pets in your account",
                    },
                },
            },
            definitions: {
                ApiResponse: {
                    type: "object",
                    properties: {
                        code: {
                            type: "integer",
                            format: "int32",
                        },
                        type: {
                            type: "string",
                        },
                        message: {
                            type: "string",
                        },
                    },
                },
                Saloon: {
                    type: "object",
                    properties: {
                        id: {
                            type: "integer",
                            format: "int64",
                        },
                        name: {
                            type: "string",
                        },
                    },
                    xml: {
                        name: "Saloon",
                    },
                },
                Store: {
                    type: "object",
                    properties: {
                        id: {
                            type: "integer",
                            format: "int64",
                        },
                        name: {
                            type: "string",
                        },
                    },
                    xml: {
                        name: "Store",
                    },
                },
                Beautician: {
                    type: "object",
                    properties: {
                        id: {
                            type: "integer",
                            format: "int64",
                        },
                        name: {
                            type: "string",
                        },
                    },
                    xml: {
                        name: "Beautician",
                    },
                },
                Customer: {
                    type: "object",
                    properties: {
                        id: {
                            type: "integer",
                            format: "int64",
                        },
                        name: {
                            type: "string",
                        },
                    },
                    xml: {
                        name: "Customer",
                    },
                },
                Review: {
                    type: "object",
                    properties: {
                        id: {
                            type: "integer",
                            format: "int64",
                        },
                        petId: {
                            type: "integer",
                            format: "int64",
                        },
                        quantity: {
                            type: "integer",
                            format: "int32",
                        },
                        shipDate: {
                            type: "string",
                            format: "date-time",
                        },
                        status: {
                            type: "string",
                            description: "Order Status",
                            enum: ["placed", "approved", "delivered"],
                        },
                        complete: {
                            type: "boolean",
                        },
                    },
                    xml: {
                        name: "Review",
                    },
                },
                Feedback: {
                    type: "object",
                    properties: {
                        id: {
                            type: "integer",
                            format: "int64",
                        },
                        petId: {
                            type: "integer",
                            format: "int64",
                        },
                        quantity: {
                            type: "integer",
                            format: "int32",
                        },
                        shipDate: {
                            type: "string",
                            format: "date-time",
                        },
                        status: {
                            type: "string",
                            description: "Order Status",
                            enum: ["placed", "approved", "delivered"],
                        },
                        complete: {
                            type: "boolean",
                        },
                    },
                    xml: {
                        name: "Feedback",
                    },
                },
                Faq: {
                    type: "object",
                    properties: {
                        id: {
                            type: "integer",
                            format: "int64",
                        },
                        petId: {
                            type: "integer",
                            format: "int64",
                        },
                        quantity: {
                            type: "integer",
                            format: "int32",
                        },
                        shipDate: {
                            type: "string",
                            format: "date-time",
                        },
                        status: {
                            type: "string",
                            description: "Order Status",
                            enum: ["placed", "approved", "delivered"],
                        },
                        complete: {
                            type: "boolean",
                        },
                    },
                    xml: {
                        name: "Faq",
                    },
                },
                Order: {
                    type: "object",
                    properties: {
                        id: {
                            type: "integer",
                            format: "int64",
                        },
                        petId: {
                            type: "integer",
                            format: "int64",
                        },
                        quantity: {
                            type: "integer",
                            format: "int32",
                        },
                        shipDate: {
                            type: "string",
                            format: "date-time",
                        },
                        status: {
                            type: "string",
                            description: "Order Status",
                            enum: ["placed", "approved", "delivered"],
                        },
                        complete: {
                            type: "boolean",
                        },
                    },
                    xml: {
                        name: "Order",
                    },
                },
                Appointment: {
                    type: "object",
                    properties: {
                        id: {
                            type: "integer",
                            format: "int64",
                        },
                        petId: {
                            type: "integer",
                            format: "int64",
                        },
                        quantity: {
                            type: "integer",
                            format: "int32",
                        },
                        shipDate: {
                            type: "string",
                            format: "date-time",
                        },
                        status: {
                            type: "string",
                            description: "Order Status",
                            enum: ["placed", "approved", "delivered"],
                        },
                        complete: {
                            type: "boolean",
                        },
                    },
                    xml: {
                        name: "Appointment",
                    },
                },
                Product: {
                    type: "object",
                    properties: {
                        id: {
                            type: "integer",
                            format: "int64",
                        },
                        petId: {
                            type: "integer",
                            format: "int64",
                        },
                        quantity: {
                            type: "integer",
                            format: "int32",
                        },
                        shipDate: {
                            type: "string",
                            format: "date-time",
                        },
                        status: {
                            type: "string",
                            description: "Order Status",
                            enum: ["placed", "approved", "delivered"],
                        },
                        complete: {
                            type: "boolean",
                        },
                    },
                    xml: {
                        name: "Stripe",
                    },
                },
                Service: {
                    type: "object",
                    properties: {
                        id: {
                            type: "integer",
                            format: "int64",
                        },
                        petId: {
                            type: "integer",
                            format: "int64",
                        },
                        quantity: {
                            type: "integer",
                            format: "int32",
                        },
                        shipDate: {
                            type: "string",
                            format: "date-time",
                        },
                        status: {
                            type: "string",
                            description: "Order Status",
                            enum: ["placed", "approved", "delivered"],
                        },
                        complete: {
                            type: "boolean",
                        },
                    },
                    xml: {
                        name: "Stripe",
                    },
                },
                Blog: {
                    type: "object",
                    properties: {
                        id: {
                            type: "integer",
                            format: "int64",
                        },
                        petId: {
                            type: "integer",
                            format: "int64",
                        },
                        quantity: {
                            type: "integer",
                            format: "int32",
                        },
                        shipDate: {
                            type: "string",
                            format: "date-time",
                        },
                        status: {
                            type: "string",
                            description: "Order Status",
                            enum: ["placed", "approved", "delivered"],
                        },
                        complete: {
                            type: "boolean",
                        },
                    },
                    xml: {
                        name: "Blog",
                    },
                },
                Media: {
                    type: "object",
                    properties: {
                        id: {
                            type: "integer",
                            format: "int64",
                        },
                        petId: {
                            type: "integer",
                            format: "int64",
                        },
                        quantity: {
                            type: "integer",
                            format: "int32",
                        },
                        shipDate: {
                            type: "string",
                            format: "date-time",
                        },
                        status: {
                            type: "string",
                            description: "Order Status",
                            enum: ["placed", "approved", "delivered"],
                        },
                        complete: {
                            type: "boolean",
                        },
                    },
                    xml: {
                        name: "Media",
                    },
                },
            },
            externalDocs: {
                description: "Find out more about Swagger",
                url: "http://swagger.io",
            },
            tags: [
                {
                    name: "Auth",
                    description: "Operations related to Auth.",
                    externalDocs: {
                        description: "Find out more",
                        url: "http://swagger.io",
                    },
                },
                {
                    name: "Customer",
                    description: "Operations related to Customer",
                    externalDocs: {
                        description: "Find out more",
                        url: "http://swagger.io",
                    },
                },
                {
                    name: "Saloon",
                    description: "Operations related to Salon.",
                    externalDocs: {
                        description: "Find out more",
                        url: "http://swagger.io",
                    },
                },
                {
                    name: "Store",
                    description: "Operations related to Store.",
                    externalDocs: {
                        description: "Find out more",
                        url: "http://swagger.io",
                    },
                },
                {
                    name: "Beautician",
                    description: "Operations related to Beautician.",
                    externalDocs: {
                        description: "Find out more",
                        url: "http://swagger.io",
                    },
                },
                {
                    name: "Service",
                    description: "Operations related to Service.",
                    externalDocs: {
                        description: "Find out more",
                        url: "http://swagger.io",
                    },
                },
                {
                    name: "Product",
                    description: "Operations related to Product.",
                    externalDocs: {
                        description: "Find out more",
                        url: "http://swagger.io",
                    },
                },
                {
                    name: "Order",
                    description: "Operations related to Order.",
                    externalDocs: {
                        description: "Find out more",
                        url: "http://swagger.io",
                    },
                },
                {
                    name: "Appointment",
                    description: "Operations related to Appointment.",
                    externalDocs: {
                        description: "Find out more",
                        url: "http://swagger.io",
                    },
                },
                {
                    name: "Review",
                    description: "Operations related to Review.",
                    externalDocs: {
                        description: "Find out more",
                        url: "http://swagger.io",
                    },
                },
                {
                    name: "Feedback",
                    description: "Operations related to Feedback.",
                    externalDocs: {
                        description: "Find out more",
                        url: "http://swagger.io",
                    },
                },
                {
                    name: "Blog",
                    description: "Operations related to Blog.",
                    externalDocs: {
                        description: "Find out more",
                        url: "http://swagger.io",
                    },
                },
                {
                    name: "Faq",
                    description: "Operations related to Faq.",
                    externalDocs: {
                        description: "Find out more",
                        url: "http://swagger.io",
                    },
                },
                {
                    name: "Media",
                    description: "Operations related to Media.",
                    externalDocs: {
                        description: "Find out more",
                        url: "http://swagger.io",
                    },
                },
                {
                    name: "System",
                    description: "Operations related to System.",
                },
            ],
            schemes: ["https", "http"],
            paths: {
                "/auth/refresh": {
                    get: {
                        tags: ["Auth"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/auth/register": {
                    post: {
                        tags: ["Auth"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/auth/login": {
                    post: {
                        tags: ["Auth"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/auth/forgot-password": {
                    post: {
                        tags: ["Auth"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/auth/verify-otp": {
                    post: {
                        tags: ["Auth"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/auth/change-password": {
                    post: {
                        tags: ["Auth"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/customers": {
                    get: {
                        tags: ["Customer"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/customers/favourites": {
                    get: {
                        tags: ["Customer"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/customers/info": {
                    get: {
                        tags: ["Customer"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/customers/appointments": {
                    get: {
                        tags: ["Customer"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/customers/orders": {
                    get: {
                        tags: ["Customer"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/customers/favourites/check": {
                    get: {
                        tags: ["Customer"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/customers/favourites/": {
                    post: {
                        tags: ["Customer"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/customers/favourites/delete": {
                    delete: {
                        tags: ["Customer"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/customers/": {
                    post: {
                        tags: ["Customer"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/customers/update": {
                    put: {
                        tags: ["Customer"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/customers/delete": {
                    delete: {
                        tags: ["Customer"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/saloons": {
                    get: {
                        tags: ["Saloon"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/saloons/nearby": {
                    get: {
                        tags: ["Saloon"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/saloons/offers": {
                    get: {
                        tags: ["Saloon"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/saloons/offers/info": {
                    get: {
                        tags: ["Saloon"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/saloons/offers/by/saloon": {
                    get: {
                        tags: ["Saloon"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/saloons/offers/": {
                    post: {
                        tags: ["Saloon"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/saloons/offers/update": {
                    put: {
                        tags: ["Saloon"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/saloons/offers/delete": {
                    delete: {
                        tags: ["Saloon"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/saloons/customers": {
                    get: {
                        tags: ["Saloon"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/saloons/info": {
                    get: {
                        tags: ["Saloon"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/saloons/finance/metrics": {
                    get: {
                        tags: ["Saloon"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/saloons/appointments": {
                    get: {
                        tags: ["Saloon"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/saloons/branches": {
                    get: {
                        tags: ["Saloon"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/saloons/metrics": {
                    get: {
                        tags: ["Saloon"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/saloons/orders": {
                    get: {
                        tags: ["Saloon"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/saloons/": {
                    post: {
                        tags: ["Saloon"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/saloons/update": {
                    put: {
                        tags: ["Saloon"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/saloons/delete": {
                    delete: {
                        tags: ["Saloon"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/beauticians": {
                    get: {
                        tags: ["Beautician"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/beauticians/info": {
                    get: {
                        tags: ["Beautician"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/beauticians/by/saloon": {
                    get: {
                        tags: ["Beautician"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/beauticians/by/service": {
                    get: {
                        tags: ["Beautician"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/beauticians/customers": {
                    get: {
                        tags: ["Beautician"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/beauticians/appointments": {
                    get: {
                        tags: ["Beautician"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/beauticians/availability": {
                    get: {
                        tags: ["Beautician"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/beauticians/metrics": {
                    get: {
                        tags: ["Beautician"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/beauticians/finance/metrics": {
                    get: {
                        tags: ["Beautician"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/beauticians/report": {
                    get: {
                        tags: ["Beautician"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/beauticians/reviews": {
                    get: {
                        tags: ["Beautician"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/beauticians/": {
                    post: {
                        tags: ["Beautician"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/beauticians/update": {
                    put: {
                        tags: ["Beautician"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/beauticians/delete": {
                    delete: {
                        tags: ["Beautician"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/services": {
                    get: {
                        tags: ["Service"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/services/info": {
                    get: {
                        tags: ["Service"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/services/list": {
                    get: {
                        tags: ["Service"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/services/": {
                    post: {
                        tags: ["Service"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/services/update": {
                    put: {
                        tags: ["Service"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/services/delete": {
                    delete: {
                        tags: ["Service"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/products": {
                    get: {
                        tags: ["Product"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/products/info": {
                    get: {
                        tags: ["Product"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/products/evaluate/price": {
                    get: {
                        tags: ["Product"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/products/by/category": {
                    get: {
                        tags: ["Product"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/products/by/saloon": {
                    get: {
                        tags: ["Product"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/products/": {
                    post: {
                        tags: ["Product"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/products/update": {
                    put: {
                        tags: ["Product"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/products/delete": {
                    delete: {
                        tags: ["Product"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/orders": {
                    get: {
                        tags: ["Order"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/orders/info": {
                    get: {
                        tags: ["Order"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/orders/payment/status": {
                    get: {
                        tags: ["Order"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/orders/invoice": {
                    post: {
                        tags: ["Order"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/orders/": {
                    post: {
                        tags: ["Order"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/orders/update": {
                    put: {
                        tags: ["Order"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/orders/delete": {
                    delete: {
                        tags: ["Order"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/appointments": {
                    get: {
                        tags: ["Appointment"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/appointments/info": {
                    get: {
                        tags: ["Appointment"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/appointments/invoice": {
                    post: {
                        tags: ["Appointment"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/appointments/": {
                    post: {
                        tags: ["Appointment"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/appointments/update": {
                    put: {
                        tags: ["Appointment"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/appointments/delete": {
                    delete: {
                        tags: ["Appointment"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/reviews": {
                    get: {
                        tags: ["Review"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/reviews/info": {
                    get: {
                        tags: ["Review"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/reviews/": {
                    post: {
                        tags: ["Review"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/reviews/update": {
                    put: {
                        tags: ["Review"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/reviews/delete": {
                    delete: {
                        tags: ["Review"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/feedbacks": {
                    get: {
                        tags: ["Feedback"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/feedbacks/info": {
                    get: {
                        tags: ["Feedback"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/feedbacks/": {
                    post: {
                        tags: ["Feedback"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/feedbacks/update": {
                    put: {
                        tags: ["Feedback"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/feedbacks/delete": {
                    delete: {
                        tags: ["Feedback"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/blogs": {
                    get: {
                        tags: ["Blog"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/blogs/info": {
                    get: {
                        tags: ["Blog"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/blogs/by/beautician": {
                    get: {
                        tags: ["Blog"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/blogs/by/saloon": {
                    get: {
                        tags: ["Blog"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/blogs/": {
                    post: {
                        tags: ["Blog"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/blogs/update": {
                    put: {
                        tags: ["Blog"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/blogs/delete": {
                    delete: {
                        tags: ["Blog"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/faqs": {
                    get: {
                        tags: ["Faq"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/faqs/info": {
                    get: {
                        tags: ["Faq"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/faqs/by/saloon": {
                    get: {
                        tags: ["Blog"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/faqs/": {
                    post: {
                        tags: ["Faq"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/faqs/update": {
                    put: {
                        tags: ["Faq"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/faqs/delete": {
                    delete: {
                        tags: ["Faq"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/media/uploads/file": {
                    post: {
                        tags: ["Media"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/media/uploads/files": {
                    post: {
                        tags: ["Media"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/media/uploads/delete": {
                    delete: {
                        tags: ["Media"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/media/uploads/delete/files": {
                    delete: {
                        tags: ["Media"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/system/logs": {
                    get: {
                        tags: ["System"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
                "/system/health": {
                    get: {
                        tags: ["System"],
                        summary:
                            "Get refresh token given that expired token is provided",
                        description:
                            "Multiple status values can be provided with comma separated strings",
                        operationId: "getRefreshToken",
                        produces: ["application/json", "application/xml"],
                        parameters: [
                            {
                                name: "token",
                                in: "query",
                                description: "Expired token",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "successful operation",
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/definitions/ApiResponse",
                                    },
                                },
                            },
                            400: {
                                description: "Invalid status value",
                            },
                        },
                    },
                },
            },
        },
        customOptions: {},
    };
    url = options.swaggerUrl || url;
    var urls = options.swaggerUrls;
    var customOptions = options.customOptions;
    var spec1 = options.swaggerDoc;
    var swaggerOptions = {
        spec: spec1,
        url: url,
        urls: urls,
        dom_id: "#swagger-ui",
        deepLinking: true,
        presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
        plugins: [SwaggerUIBundle.plugins.DownloadUrl],
        layout: "StandaloneLayout",
    };
    for (var attrname in customOptions) {
        swaggerOptions[attrname] = customOptions[attrname];
    }
    var ui = SwaggerUIBundle(swaggerOptions);

    if (customOptions.oauth) {
        ui.initOAuth(customOptions.oauth);
    }

    if (customOptions.preauthorizeApiKey) {
        const key = customOptions.preauthorizeApiKey.authDefinitionKey;
        const value = customOptions.preauthorizeApiKey.apiKeyValue;
        if (!!key && !!value) {
            const pid = setInterval(() => {
                const authorized = ui.preauthorizeApiKey(key, value);
                if (!!authorized) clearInterval(pid);
            }, 500);
        }
    }

    if (customOptions.authAction) {
        ui.authActions.authorize(customOptions.authAction);
    }

    window.ui = ui;
};