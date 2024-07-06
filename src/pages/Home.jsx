import Hero from "../components/Hero"
import Tabs from "../components/Tabs"
import Faq from "../components/Faq/Faq"
import Steps from "../components/Steps"
import Suggest from "../components/Suggest"
import Benefit from "../pages/Benefit"

const Home = () => {
  return (
    <>
      <Tabs />
      <Hero />
      <Steps />
      <Benefit />
      <Faq />
      <Suggest />
    </>
  )
}

export default Home
