pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract testToken is ERC20 {
    constructor() ERC20("Test Token", "TEST") {}

    function mint(address account, uint256 amount) public {
_mint(account, amount);
}

}