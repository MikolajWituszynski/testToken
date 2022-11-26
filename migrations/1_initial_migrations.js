const TestToken = artifacts.require('testToken')

module.exports = async function (deployer) {
  await deployer.deploy(TestToken)

  const testToken = await TestToken.deployed()

  // Mint 200 testToken for the first account
  await testToken.mint('0x8d1E3dAE734D79B07bdD2Eb04ae8509a934ecfe2', '200000000000000000000')
}
