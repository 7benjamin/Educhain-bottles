
export const wagmiContractConfig = {
    // Todo
    address: '0x112910FcDA31f2bD6dB7C6Bc28467651EF5aCa19',
    abi: [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "bottleId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                }
            ],
            "name": "BottleCreated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "bottleId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                }
            ],
            "name": "BottleReplied",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "string[]",
                    "name": "ipfsHashs",
                    "type": "string[]"
                }
            ],
            "name": "createBottle",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                },
                {
                    "internalType": "string[]",
                    "name": "ipfsHashs",
                    "type": "string[]"
                }
            ],
            "name": "openAndReplyBottle",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "allBottles",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "fromTime",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "isOpen",
                    "type": "bool"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "replyTime",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "bottleOwned",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getAllBottles",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "from",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "fromTime",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "isOpen",
                            "type": "bool"
                        },
                        {
                            "internalType": "address",
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "replyTime",
                            "type": "uint256"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "string",
                                    "name": "ipfsHash",
                                    "type": "string"
                                }
                            ],
                            "internalType": "struct DriftBottle.BlobInfo[]",
                            "name": "msgs",
                            "type": "tuple[]"
                        }
                    ],
                    "internalType": "struct DriftBottle.BottleInfo[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                }
            ],
            "name": "getBottleMessages",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "string",
                            "name": "ipfsHash",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct DriftBottle.BlobInfo[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "idToBottle",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "fromTime",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "isOpen",
                    "type": "bool"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "replyTime",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalBottles",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
} as const;
