import TableCard from 'components/TableCard'

export default function Dashboard() {
  return (
    <div className=" h-screen  ">
      <div className="px-3 md:px-8 mb-80 mt-32 ">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:px-4 ">
            <TableCard />
          </div>
        </div>
      </div>
    </div>
  )
}
