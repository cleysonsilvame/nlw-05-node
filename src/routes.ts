import { Router } from 'express';
import { MessagesController } from './controllers/MessagesController';
import { SettingsController } from './controllers/SettingsController';
import { UsersController } from './controllers/UsersControllers';

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesControllers = new MessagesController();

const routes = Router();

routes.post('/settings', settingsController.create);
routes.get('/settings/:username', settingsController.findByUsername);
routes.put('/settings/:username', settingsController.update);

routes.post('/users', usersController.create);

routes.post('/messages', messagesControllers.create);
routes.get('/messages/:id', messagesControllers.showByUser);

export { routes };
