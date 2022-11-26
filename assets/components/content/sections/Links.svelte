<script>
    export let config;
    let { socialButtons } = config;

    /** Transform data add animation state */
    socialButtons.map((buttonGroup) => {
        buttonGroup.buttons = buttonGroup.buttons.map((button) => {
            return { ...button, animate: false };
        });
        return buttonGroup;
    });
</script>

<div class="bg-white shadow-xl rounded-lg">
    <div class="p-6">
        {#each socialButtons as buttonGroup}
            <div class="mb-4">
                <h2 class="mb-2 text-lg border-b border-gray-200">{ buttonGroup.label }</h2>
                <div class="grid sm:grid-rows-1 md:grid-cols-3 gap-2">
                    {#each buttonGroup.buttons as button}
                        <div on:mouseenter={() => { button.animate = true; }} on:mouseleave={() => { button.animate = false; }} >
                            <a
                                href="{ button.link }"
                                class="animate__animated flex items-center py-2 px-4 rounded"
                                class:text-white={!button.textColor}
                                target="_blank"
                                rel="noreferrer"
                                class:animate__tada={ button.animate }
                                style="background-color: {button.color}; {(button.textColor) ? `color: ${button.textColor};` : ''}"
                            >
                                <i class="{ button.icon }"></i>
                                <div class="ml-4">
                                    <h5 class="font-bold">{ button.label }</h5>
                                    <p class="whitespace-nowrap text-xs">{ button.caption }</p>
                                </div>
                            </a>
                        </div>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</div>