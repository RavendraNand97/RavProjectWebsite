import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));