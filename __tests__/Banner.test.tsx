import Banner from "@/app/ui/components/Banner"
import { render, screen, fireEvent } from "@testing-library/react"

describe("Banner",()=>{
    test('Renders without crashing',()=>{
        render(<Banner/>)
    })

    test('Displays correct texts',()=>{
        render(<Banner/>)
        expect(screen.getByText("We've got your travel plans.")).toBeInTheDocument()
        expect(screen.getByText(/Tripgram is a platform for explorers/i)).toBeInTheDocument()
        expect(screen.getByText('Explore More')).toBeInTheDocument()
    })
})