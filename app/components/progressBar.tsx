export default function ProgressBar(props: any) {
  return (
    <>
      <div className="flex flex-col items-end w-full mt-10 gap-2">
          <div className="text-lg font-medium flex justify-between w-full items-center p-1">
              <h3>Progress:</h3>
              <span>{props.progressWidth.toFixed(2)}%</span>
          </div>
          <div className="w-full relative bg-gray-700 h-3 rounded-full">
              <div style={{width : `${props.progressWidth}%`}} className={`h-full transition-all ease-in-out duration-500 absolute left-0 rounded-full bg-green-400`}></div>
          </div>
      </div>
    </>
  )
}
