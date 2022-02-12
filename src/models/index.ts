import { Sequelize } from 'sequelize';
import { JobVacantInitializer } from './JobVacant';
import { UserInitializer } from './User';

export const registerModels = (client: Sequelize) => {
   new JobVacantInitializer(client).initialize();
   new UserInitializer(client).initialize();
}