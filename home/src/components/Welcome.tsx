
const Welcome = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-[3vw] gap-2 '>
        <div className='text-xl w-full font-normal  text-blue-500 border-secondary text-center'>
            Welcome to our Official website of 
        </div>
        <div className='text-4xl text-primary font-bold dark:text-secondary'>
        SOLANKI BROTHER COUNCIL FOR OPEN AND DISTANCE LEARNING (SBCODL)
        </div>
        <div className="dark:text-secondary px-10 text-primary  text-center w-[72vw]">
        SBCODL is a non-governmental, non-profit educational council established in 2022 under the Government of India. We function as an independent accreditation, evaluation, and quality assurance body.<br/>
        <span className='text-primary'>A venture of <b>SBCODL</b> and Run by <b> SBCODL</b></span>
        </div>
    </div>
  )
}

export default Welcome