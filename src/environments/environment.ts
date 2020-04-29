// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const HOSTNAME: string = "localhost";
const PORT_NUMBER: number = 8080;
const APPLICATION_NAME: string = '/Flight_Manager';

export const environment = {
  production: false,
  travelerAPIUrl: 'http://' + HOSTNAME + ':' + PORT_NUMBER + APPLICATION_NAME + '/Traveller',
  adminAPIUrl: 'http://' + HOSTNAME + ':' + PORT_NUMBER + APPLICATION_NAME + '/Admin',
  travelerSearchAPIUrl: 'http://' + HOSTNAME + ':' + PORT_NUMBER + APPLICATION_NAME + '/Search'

};
