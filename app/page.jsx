import Feed from '@components/feed'
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text_center"> Discover & Share 
        <br className='max-md:hidden'/>
        </h1>
        <span className="orange_gradient text-center">AI-Powred Porompts</span>
        <p className="desc text-center">
            Promptopia is an open-source AI Prompting tool for modern world 
            to discover, share and create modern creative prompts
        </p>
        <Feed/>

    </section>
  )
}

export default Home