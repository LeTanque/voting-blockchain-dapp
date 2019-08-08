web3 = require('./index');
compiledCode = require('./compile');


abiDefinition = JSON.parse(compiledCode.contracts[':Voting'].interface)
VotingContract = web3.eth.contract(abiDefinition)
byteCode = compiledCode.contracts[':voting'].bytecode
deployedContract = VotingContract.new(['Bill','Tom','Janice'],{data: byteCode, from: web3.eth.accounts[0], gas: 4700000})
contractInstance = VotingContract.at(deployedContract.address)






