import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="Small Rounded-sm" size="small" shape="rounded-sm" />
      <Button title="Medium Rounded-md" size="medium" shape="rounded-md" />
      <Button title="Large Rounded-full" size="large" shape="rounded-full" />
      <Button title="Large Rounded-lg" size="large" shape="rounded-full" />
    </div>
  )
}
export default Landing