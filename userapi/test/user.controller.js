const { expect } = require('chai')
const userController = require('../src/controllers/user')

describe('User', () => {


  describe('Create', () => {

    it('create a new user', (done) => {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      userController.create(user, (err, result) => {
        expect(err).to.be.equal(null)
        expect(result).to.be.equal(null)
        done()
      })
    })

    it('passing wrong user parameters', (done) => {
      const user = {
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      userController.create(user, (err, result) => {
        expect(err).to.not.be.equal(null)
        expect(result).to.be.equal(null)
        done()
      })
    })

    it('avoid creating an existing user', (done)=> {
      const user2 = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      const user3 = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      userController.create(user2, (error, res) => {
        console.log(user2.username)
        userController.create(user3, (err, result) => {
          console.log(user3.username)
          expect(err).to.be.equal(null)
          expect(result).to.be.equal(null)
          done()
        })
      })
    })
  })

  describe('Get', ()=> {
    it('get a user by username', (done) => {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      userController.create(user, () => {
        userController.get(user.username, (error, result2) => {
          expect(error).to.be.equal(null)
          expect(result2).to.not.be.equal(null)
          done()

        })
      })
    })
  })
})