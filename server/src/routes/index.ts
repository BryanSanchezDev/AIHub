import { Router } from 'express';

const router = Router();

// Define your API endpoints here
router.get('/example', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});

// Export the router
export default router;