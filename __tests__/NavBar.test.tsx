import { NavBar } from "@/app/ui/components/navBar"
import { render, screen, fireEvent } from "@testing-library/react"

describe("NavBar", () => {

    test('renders without crashing', () => {
        render(<NavBar />)
    })

    test('intitial state', () => {
        const { getByText } = render(<NavBar />)
        expect(getByText('Tripgram')).toBeInTheDocument()
        expect(getByText('Locations')).toBeInTheDocument()
        expect(getByText('Experiences')).toBeInTheDocument()
        expect(getByText('Contact Us')).toBeInTheDocument()
        expect(getByText('Reserve Now')).toBeInTheDocument()
    })

    test('check for reserve button', () => {
        const { getByRole, getByText, queryByText } = render(<NavBar />);
        const hamburgerButton = getByRole('button', { name: /reserve/i });


        expect(hamburgerButton).toBeInTheDocument()

    })

})

