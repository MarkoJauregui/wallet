import Web3 from 'web3';
import Wallet from './contracts/Wallet.json';

const getWeb3 = () => {
	return new Web3('https://localhost:9545');
};
