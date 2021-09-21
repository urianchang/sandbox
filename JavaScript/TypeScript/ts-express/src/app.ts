// lib/app.ts

import express = require('express');
import bodyParser = require('body-parser');

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void{
    // support application/json POST data
    this.app.use(bodyParser.json());

    // support application/x-www-form-urlencoded POST data
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new App().app;
