const chai = require('chai')
const verifier = require('pact').Verifier
const path = require('path')

describe('Pact', () => {
  var base_path='http://localhost:8081/myProvider'
  var opts = {
    providerBaseUrl: base_path,
    provider: 'myProvider',
    providerStatesSetupUrl: `${base_path}/api/_pact/state`,
    pactUrls: [`${path.resolve()}/pacts/myconsumer-myprovider.json`]
  }

  it('should verify', function () {
    this.timeout(5000)
    return verifier.verifyProvider(opts).then(output => {
      console.log('Pact Verification Complete!')
      console.log(output)
    }).catch(err => {
      console.error('Pact Verification Failed!')
      console.error(err)
    })
  })


})
