import { Button } from "@material-tailwind/react";

export function OutlineBtn({ children=<></> }) {
    return (
        <Button color="gray" className="rounded-full" variant="outlined">
            {children}
        </Button>
    );
}

export default OutlineBtn;
