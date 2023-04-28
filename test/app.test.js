var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { db, User } = require('./test.db');
require('dotenv').config();

var correct = 0;

describe('Test API', () => {

    describe('GET /start', () => {
        it('should return 200 status code', done => {
            chai.request('http://localhost:3000')
                .get('/start')
                .end((err, res) => {
                    if (err) done(err);
                    chai.expect(res).to.have.status(200);
                    chai.expect(res.body).to.equal('Hola Amigo!');
                    correct++;
                    done();
                });
        });
    });

    let id = null;
    describe('POST /user', () => {
        it('should return 201 status code', done => {
            chai.request('http://localhost:3000')
                .post('/user')
                .send({ fullname: 'Ritesh Ram Wanave' })
                .end((err, res) => {
                    if (err) done(err);
                    chai.expect(res).to.have.status(201);
                    chai.expect(res.body).to.have.property('id');
                    correct++;
                    id = res.body.id;
                    done();
                });
        });
    });

    describe('GET /user/:id', () => {
        it('should return 200 status code', done => {
            chai.request('http://localhost:3000')
                .get('/user/' + id)
                .end((err, res) => {
                    if (err) done(err);
                    chai.expect(res).to.have.status(200);
                    chai.expect(res.body).to.have.property('id');
                    chai.expect(res.body).to.have.property('fullname');
                    chai.expect(res.body.fullname).to.equal('Ritesh Ram Wanave');
                    correct++;
                    done();
                });
        });
    });

    describe('PUT /user/:id', () => {
        it('should return 200 status code', done => {
            chai.request('http://localhost:3000')
                .put('/user/' + id)
                .send({ fullname: 'Ritesh Wanave' })
                .end((err, res) => {
                    if (err) done(err);
                    chai.expect(res).to.have.status(200);
                    correct++;
                    done();
                });
        });
    });

    describe('GET /user/:id', () => {
        it('should return 200 status code', done => {
            chai.request('http://localhost:3000')
                .get('/user/' + id)
                .end((err, res) => {
                    if (err) done(err);
                    chai.expect(res).to.have.status(200);
                    chai.expect(res.body).to.have.property('id');
                    chai.expect(res.body).to.have.property('fullname');
                    chai.expect(res.body.fullname).to.equal('Ritesh Wanave');
                    correct++;
                    done();
                });
        });
    });

    describe('DELETE /user/:id', () => {
        it('should return 200 status code', done => {
            chai.request('http://localhost:3000')
                .delete('/user/' + id)
                .end((err, res) => {
                    if (err) done(err);
                    chai.expect(res).to.have.status(200);
                    chai.expect(res.body).to.have.property('id');
                    chai.expect(res.body).to.have.property('fullname');
                    correct++;
                    done();
                });
        });
    }); 

    describe('GET /user/:id', () => {
        it('should return 404 status code', done => {
            chai.request('http://localhost:3000')
                .get('/user/' + id)
                .end((err, res) => {
                    if (err) done(err);
                    chai.expect(res).to.have.status(404);
                    chai.expect(res.body).to.have.property('message');
                    correct++;
                    done();
                });
        });
    });

    describe('DELETE /user/:id', () => {
        it('should return 404 status code', done => {
            chai.request('http://localhost:3000')
                .delete('/user/' + id)
                .end((err, res) => {
                    if (err) done(err);
                    chai.expect(res).to.have.status(404);
                    chai.expect(res.body).to.have.property('message');
                    correct++;
                    done();
                });
        });
    });

    describe('PUT /user/:id', () => {
        it('should return 404 status code', done => {
            chai.request('http://localhost:3000')
                .put('/user/' + id)
                .send({ fullname: 'Ritesh Ram Wanave' })
                .end((err, res) => {
                    if (err) done(err);
                    chai.expect(res).to.have.status(404);
                    chai.expect(res.body).to.have.property('message');
                    correct++;
                    done();
                });
        });
    });

    describe('POST /user', () => {
        it('should return 201 status code', done => {
            chai.request('http://localhost:3000')
                .post('/user')
                .send({ fullname: 'Ritesh Ram Wanave' })
                .end((err, res) => {
                    if (err) done(err);
                    chai.expect(res).to.have.status(201);
                    chai.expect(res.body).to.have.property('id');
                    done();
                });
        });
    });

    describe('POST /user', () => {
        it('should return 201 status code', done => {
            chai.request('http://localhost:3000')
                .post('/user')
                .send({ fullname: 'Daulatrao Amrutrao Patil' })
                .end((err, res) => {
                    if (err) done(err);
                    chai.expect(res).to.have.status(201);
                    chai.expect(res.body).to.have.property('id');
                    done();
                });
        });
    });

    describe('POST /user', () => {
        it('should return 201 status code', done => {
            chai.request('http://localhost:3000')
                .post('/user')
                .send({ fullname: 'Vaishnvai Vivekanand Kulkarni' })
                .end((err, res) => {
                    if (err) done(err);
                    chai.expect(res).to.have.status(201);
                    chai.expect(res.body).to.have.property('id');
                    done();
                });
        });
    });

    describe('POST /user', () => {
        it('should return 201 status code', done => {
            chai.request('http://localhost:3000')
                .post('/user')
                .send({ fullname: 'Dnyaneshwari Anil Kolapkar' })
                .end((err, res) => {
                    if (err) done(err);
                    chai.expect(res).to.have.status(201);
                    chai.expect(res.body).to.have.property('id');
                    done();
                });
        });
    });

    describe('GET /user/all', () => {
        it('should return 200 status code', done => {
            chai.request('http://localhost:3000')
                .get('/user/all')
                .end((err, res) => {
                    if (err) done(err);
                    chai.expect(res).to.have.status(200);
                    chai.expect(res.body).to.be.an('array');
                    chai.expect(res.body).to.have.lengthOf(4);
                    correct++;
                    done();
                });
        });
    });
    
});

const updateScore = async () => {
    try {
        await db();
        console.log(process.env.GITHUB_ACTOR);
        let user = await User.findOneAndUpdate({ username: process.env.GITHUB_ACTOR }, { score: correct });
        await user.save();
        console.log('Score saved to database: ' + process.env.GITHUB_ACTOR);
    }
    catch (err) {
        console.log(err);
    }
}

after(async () => {
    try {
        console.log(`You have passed ${correct} out of 10 tests`);
        // increase the time limit to 10 seconds
        await updateScore();
        // return code 0 if all tests pass
        process.exit(0);
    }
    catch (err) {
        console.log(err);
    }
});
