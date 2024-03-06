import LocationInfo from "@/app/ui/components/LocationInfo"
import { render, screen, fireEvent } from "@testing-library/react"

describe('Location Info',()=>{
   test('renders without crashing',()=>{
    render(<LocationInfo/>)
    expect(screen.getByAltText(/dubai/i)).toBeInTheDocument()
   })
})