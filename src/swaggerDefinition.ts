const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'E-Commerce API',
        version: '1.0.0',
        description: 'This API provides endpoints for managing users, products, orders, and categories in an e-commerce application.',
    },
    servers: [
        {
            url: 'http://localhost:5001', // Change this to match your server URL
            description: 'Development server',
        },
    ],
    components: {
        securitySchemes: {
            JWT: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
        },
    },
    security: [{ JWT: [] }],
    paths: {
        "/signup": {
            post: {
                summary: "Register a new user",
                responses: {
                    200: {
                        description: "User registered successfully",
                    },
                },
            },
        },
        "/login": {
            post: {
                summary: "Login user",
                responses: {
                    200: {
                        description: "User logged in successfully",
                    },
                },
            },
        },
        "/logout": {
            post: {
                summary: "Logout user",
                security: [{ JWT: [] }],
                responses: {
                    200: {
                        description: "User logged out successfully",
                    },
                },
            },
        },
        "/delete-user/{id}": {
            delete: {
                summary: "Delete a user",
                security: [{ JWT: [] }],
                parameters: [
                    {
                        in: "path",
                        name: "id",
                        description: "User ID to delete",
                        required: true,
                        schema: {
                            type: "string",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "User deleted successfully",
                    },
                },
            },
        },
        "/update-user/{id}": {
            put: {
                summary: "Update user information",
                security: [{ JWT: [] }],
                parameters: [
                    {
                        in: "path",
                        name: "id",
                        description: "User ID to update",
                        required: true,
                        schema: {
                            type: "string",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "User information updated successfully",
                    },
                },
            },
        },
        "/admins": {
            get: {
                summary: "Get list of admins",
                security: [{ JWT: [] }],
                responses: {
                    200: {
                        description: "List of admins retrieved successfully",
                    },
                },
            },
        },
        "/allusers": {
            get: {
                summary: "Get list of all users",
                security: [{ JWT: [] }],
                responses: {
                    200: {
                        description: "List of all users retrieved successfully",
                    },
                },
            },
        },
        "/forget-password": {
            post: {
                summary: "Request to reset password",
                responses: {
                    200: {
                        description: "Password reset request successful",
                    },
                },
            },
        },
        "/otp-send": {
            post: {
                summary: "Send OTP to user for password reset",
                responses: {
                    200: {
                        description: "OTP sent successfully",
                    },
                },
            },
        },
        "/reset-password": {
            post: {
                summary: "Reset user's password",
                responses: {
                    200: {
                        description: "Password reset successful",
                    },
                },
            },
        },
        "/addorder": {
            post: {
                summary: "Add a new order",
                security: [{ JWT: [] }],
                requestBody: {
                    description: "Order details",
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    productId: {
                                        type: "string",
                                        example: "prod1234",
                                    },
                                    quantity: {
                                        type: "number",
                                        example: 2,
                                    },
                                    address: {
                                        type: "string",
                                        example: "123 Main St, City, Country",
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    200: {
                        description: "Order added successfully",
                    },
                },
            },
        },
        "/all-orders": {
            get: {
                summary: "Get all orders",
                security: [{ JWT: [] }],
                responses: {
                    200: {
                        description: "List of all orders",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: {
                                        type: "object",
                                        properties: {
                                            id: {
                                                type: "string",
                                                example: "order1234",
                                            },
                                            productId: {
                                                type: "string",
                                                example: "prod1234",
                                            },
                                            quantity: {
                                                type: "number",
                                                example: 2,
                                            },
                                            address: {
                                                type: "string",
                                                example: "123 Main St, City, Country",
                                            },
                                            status: {
                                                type: "string",
                                                example: "Pending",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
        "/order/{id}": {
            get: {
                summary: "Get single order details",
                security: [{ JWT: [] }],
                parameters: [
                    {
                        in: "path",
                        name: "id",
                        description: "Order ID",
                        required: true,
                        schema: {
                            type: "string",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "Order details retrieved",
                    },
                },
            },
        },
        "/admin-order/{id}": {
            get: {
                summary: "Get single order details for admin",
                security: [{ JWT: [] }],
                parameters: [
                    {
                        in: "path",
                        name: "id",
                        description: "Order ID",
                        required: true,
                        schema: {
                            type: "string",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "Order details retrieved for admin",
                    },
                },
            },
        },
        "/delete/order/{id}": {
            delete: {
                summary: "Delete an order",
                security: [{ JWT: [] }],
                parameters: [
                    {
                        in: "path",
                        name: "id",
                        description: "Order ID",
                        required: true,
                        schema: {
                            type: "string",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "Order deleted successfully",
                    },
                },
            },
        },
        "/user/{id}": {
            get: {
                summary: "Get user profile",
                parameters: [
                    {
                        in: "path",
                        name: "id",
                        description: "User ID",
                        required: true,
                        schema: {
                            type: "string",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "User profile retrieved",
                    },
                },
            },
        },
        "/update/user/{id}": {
            put: {
                summary: "Update user profile",
                security: [{ JWT: [] }],
                parameters: [
                    {
                        in: "path",
                        name: "id",
                        description: "User ID",
                        required: true,
                        schema: {
                            type: "string",
                        },
                    },
                ],
                requestBody: {
                    description: "Updated user profile",
                    required: true,
                    content: {
                        "multipart/form-data": {
                            schema: {
                                type: "object",
                                properties: {
                                    // Add properties for updating user profile here
                                },
                            },
                        },
                    },
                },
                responses: {
                    200: {
                        description: "User profile updated successfully",
                    },
                },
            },
        },
        "/create-category": {
            post: {
                summary: "Create a new category",
                security: [{ JWT: [] }],
                requestBody: {
                    description: "Category details",
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    name: {
                                        type: "string",
                                        example: "Category Name",
                                    },
                                    description: {
                                        type: "string",
                                        example: "Category Description",
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    200: {
                        description: "Category created successfully",
                    },
                },
            },
        },
        "/all-category": {
            get: {
                summary: "Get all categories",
                responses: {
                    200: {
                        description: "List of all categories",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: {
                                        type: "object",
                                        properties: {
                                            id: {
                                                type: "string",
                                                example: "category1234",
                                            },
                                            name: {
                                                type: "string",
                                                example: "Category Name",
                                            },
                                            description: {
                                                type: "string",
                                                example: "Category Description",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
        "/update-category/{id}": {
            put: {
                summary: "Update a category",
                security: [{ JWT: [] }],
                parameters: [
                    {
                        in: "path",
                        name: "id",
                        description: "Category ID",
                        required: true,
                        schema: {
                            type: "string",
                        },
                    },
                ],
                requestBody: {
                    description: "Updated category details",
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    name: {
                                        type: "string",
                                        example: "Updated Category Name",
                                    },
                                    description: {
                                        type: "string",
                                        example: "Updated Category Description",
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    200: {
                        description: "Category updated successfully",
                    },
                },
            },
        },
        "/delete-category/{id}": {
            delete: {
                summary: "Delete a category",
                security: [{ JWT: [] }],
                parameters: [
                    {
                        in: "path",
                        name: "id",
                        description: "Category ID",
                        required: true,
                        schema: {
                            type: "string",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "Category deleted successfully",
                    },
                },
            },
        },
    },
};

export default swaggerDefinition;