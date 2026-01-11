import { Button } from "solid-element-ui";


const ButtonDemo = () => {
    return (
        <div>
            <Button>Click me</Button>
            <Button variant="outline" color="success">
                Click me
            </Button>
        </div>
    );
};

export{ ButtonDemo };