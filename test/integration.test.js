import request from 'supertest';
import { assert } from 'chai';
import { describe, it } from 'mocha';
import app from '../src/app';

describe('Integration tests', () => {
    it('GET', async () => {
        const response = await request(app).get('/');
        assert.equal(response.status, 200);
        assert.equal(response.text, 'Works');
    });
});
