import { faker } from '@faker-js/faker';

class HelperFunction {
  generateUser() {
    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      username: faker.internet.username(),
      email: faker.internet.email(),
    };
  }

  getRandomNumber(min = 1, max = 1000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

export default HelperFunction;
