import { Tile } from "@/components/Tile";
interface categoryProps {
    id: number
    category: string
}

export function Category(props: categoryProps) {
    const {id, category } = props

    const values = [100, 200, 300, 400, 500, 600]

    return (
        <div className="flex-grow">
            <h1 className="border font-bold p-4 bg-red-600 text-white flex justify-center items-center h-24"> { category } </h1>
            {values.map((value: number, key: number) => (
                <Tile key={key} id={id} value={value}/>
            ))}
        </div>

    )

}