
import toast from "react-hot-toast";
import { wagmiContractConfig } from "@/contractConfig";
import { useReadContract, useWriteContract,useWaitForTransactionReceipt} from 'wagmi'
// Todo

export default function useInteracton() {
    const { data: hash, writeContract } = useWriteContract()

    const {data:allBottles} = useReadContract({
        ...wagmiContractConfig,
        functionName: 'getAllBottles',
    });

    const handleCreateBottle = async (ipfsHashs: string[]) => {
        try {
            writeContract({
                ...wagmiContractConfig,
                functionName: "createBottle",
                args: [ipfsHashs],
            })
        } catch (error) {
            console.error("Create Bottle failed:", error);
            toast.error("Create Bottle failed");
        }
    }

    const handleReplyBottle = async (id: string, ipfsHashs: string[]) => {
        try {
            writeContract({
                ...wagmiContractConfig,
                functionName: "openAndReplyBottle",
                args: [BigInt(id), ipfsHashs],
            })

        } catch (error) {
            console.error("Reply bottle failed:", error);
            toast.error("Reply bottle failed.");
        }
    }
    const confirmation  =
    useWaitForTransactionReceipt({
      hash,
    })

    // allBottles
    // handleCreateBottle
    // handleReplyBottle

    return {
        handleCreateBottle,
        handleReplyBottle,
        allBottles,
        confirmation
    }
}