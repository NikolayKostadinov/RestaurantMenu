import {render, screen} from "@testing-library/react";
import Footer from "./Footer.js";

describe('Footer Component Visible Tests Suit', function () {
    test('Footer show correct text', ()=>{
       // arrange
        render(<Footer/>);

        // act
        const footer = screen.getByText('© 2023 Николай Костадинов');

       // assert
        expect(footer).toBeInTheDocument();
    });
});
