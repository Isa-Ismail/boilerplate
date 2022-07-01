import { Button, Divider } from "@mui/material"
import Image from "next/image"

const Respond = () => {
  return (
    <div className="px-10 py-10">
        <h1 className="text-green-700">Projects responding to South Asia Floods</h1>
        <Divider />
        <div className="flex py-10 space-x-20 space-y-5">
            <Image src="/shop.png" width = {300} height = {200} />
            <div className="space-y-2">
                <h2 className="text-green-700">Title 1</h2>
                <h2>Title 2</h2>
                <p>Dummp paragraph Dummp paragraph Dummp paragraph Dummp paragraph Dummp paragraph Dummp paragraph Dummp paragraph Dummp paragraph Dummp paragraph Dummp paragraph </p>
                <div className="space-x-10">
                    <select className="p-2 cursor-pointer border-2 border-green-700 rounded-md">
                        <option>0</option><option>5</option><option>10</option><option>15</option><option>20</option>
                    </select>
                    <Button className="!bg-green-700 text-white">Donate</Button>
                </div>
            </div>
        </div>
        <Divider />
        <div className="flex py-10 space-x-20 space-y-5">
            <Image src="/shop.png" width = {300} height = {200} />
            <div className="space-y-2">
                <h2 className="text-green-700">Title 1</h2>
                <h2>Title 2</h2>
                <p>Dummp paragraph Dummp paragraph Dummp paragraph Dummp paragraph Dummp paragraph Dummp paragraph Dummp paragraph Dummp paragraph Dummp paragraph Dummp paragraph </p>
                <div className="space-x-10">
                    <select className="p-2 cursor-pointer border-2 border-green-700 rounded-md">
                        <option>0</option><option>5</option><option>10</option><option>15</option><option>20</option>
                    </select>
                    <Button className="!bg-green-700 text-white">Donate</Button>
                </div>
            </div>
        </div>
        <Divider />
        <div className="flex py-10 space-x-20 space-y-5">
            <Image src="/shop.png" width = {300} height = {200} />
            <div className="space-y-2">
                <h2 className="text-green-700">Title 1</h2>
                <h2>Title 2</h2>
                <p>Dummp paragraph Dummp paragraph Dummp paragraph Dummp paragraph Dummp paragraph Dummp paragraph Dummp paragraph Dummp paragraph Dummp paragraph Dummp paragraph </p>
                <div className="space-x-10">
                    <select className="p-2 cursor-pointer border-2 border-green-700 rounded-md">
                        <option>0</option><option>5</option><option>10</option><option>15</option><option>20</option>
                    </select>
                    <Button className="!bg-green-700 text-white">Donate</Button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Respond