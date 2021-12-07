import { Sequelize } from 'sequelize';
import { JobVacantInitializer } from './JobVacant';

export const registerModels = (client: Sequelize) => {
   new JobVacantInitializer(client).initialize();
}