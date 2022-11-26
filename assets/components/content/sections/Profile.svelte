<script>
    export let config;
    let { name, tagline, username, codeEnvironment } = config;
</script>

<h1 class="mt-2 text-2xl text-center font-bold">{name}</h1>
<p class="mt-2 text-center text-base font-normal text-gray-500">{tagline}</p>
<div class="my-4 items-center w-full">
    <img alt="codeSTACKr's GitHub Stats" src="https://github-readme-stats.vercel.app/api?username={username}&show_icons=true&hide_border=false" />
    <img alt="DenverCoder1's Top Languages" src="https://github-readme-stats.vercel.app/api/top-langs/?username={username}&langs_count=8&layout=compact&hide_border=false" width="100%"/>
    <div class="border border-slate-200 p-4">
        <h2 class="pb-4 font-bold text-xl text-blue-600">Things I code with</h2>
        {#if codeEnvironment.length}
            <table class="table-auto w-full rounded">
                <thead>
                <tr>
                    <th style="width:30%;"></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {#each codeEnvironment as environment}
                    <tr>
                        <td>{environment.label}</td>
                        <td class="grid grid-cols-6">
                            {#each environment.tools as tool}<img height="20" src="{tool}">{/each}
                        </td>
                    </tr>
                {/each}
                </tbody>
            </table>
        {/if}
    </div>
</div>