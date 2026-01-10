import { Accordion as K } from "@kobalte/core/accordion";

export const Accordion = ()=>{
    return (
        <K>
            <K.Item value="">
                <K.Header class="accordion__item-header">
                    <K.Trigger class="accordion__item-trigger">
                        <span>Is it accessible?</span>
                    </K.Trigger>
                </K.Header>
                <K.Content class="accordion__item-content">
                    <p class="accordion__item-content-text">
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </p>
                </K.Content>
            </K.Item>
        </K>
    );
}

