<script>
    import Agenda from "../components/Agenda.svelte";
    import QRCode from '@castlenine/svelte-qrcode';
</script>

<svelte:head>
<title>Mount Nod Residents Association</title>
</svelte:head>

<div class="mx-auto py-8 px-2 print:py-0 px-0 sm:max-w-3xl print:max-w-none">
    <h1 class="text-center font-bold text-3xl mb-4 print:hidden">MOUNT NOD RESIDENTS’ ASSOCIATION</h1>
    <a name="equipment">
      <h2 class="text-center font-bold text-lg mb-1">EQUIPMENT LIST<span class="hidden print:inline">&nbsp;&mdash;&nbsp;please keep this safe</span></h2>
    </a>
    <p class="text-center mb-1">Available for use by all members free of charge on the Mount Nod Estate only</p>
    <p class="text-center mb-3">The number denotes the custodian for the item. These are listed on your membership
        card.</p>

    <div class="grid sm:grid-cols-2 print:grid-cols-2 gap-4 px-4 mx-auto max-w-sm sm:max-w-full print:max-w-none">
        <div>
            <table class="equipment">
                <caption>Ladders</caption>
                <tr>
                    <td>20’ Double Ladders</td>
                    <td>12</td>
                </tr>
                <tr>
                    <td>25’ Double Ladders</td>
                    <td>6, 10</td>
                </tr>
                <tr>
                    <td>3-way Folding Ladder</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>Ladder Stand-Off</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>Roof Ladder</td>
                    <td>6</td>
                </tr>
            </table>

            <table class="equipment">
                <caption>Tools</caption>
                <tr>
                    <td>Angle Grinder</td>
                    <td>19</td>
                </tr>
                <tr>
                    <td>Black and Decker Workmate</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>Drain Rods</td>
                    <td>8, 19</td>
                </tr>
                <tr>
                    <td>Drill Sharpener</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>Electric Tile Cutter</td>
                    <td>13</td>
                </tr>
                <tr>
                    <td>Heavy Duty SDS Drill</td>
                    <td>8</td>
                </tr>
                <tr>
                    <td>Mitre Jigsaw</td>
                    <td>19</td>
                </tr>
                <tr>
                    <td>Pick Axe</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Pop Riveter</td>
                    <td>5, 13</td>
                </tr>
                <tr>
                    <td>Power Sander</td>
                    <td>27</td>
                </tr>
                <tr>
                    <td>Sledge Hammer</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Spirit Level (1 meter)</td>
                    <td>19</td>
                </tr>
                <tr>
                    <td>Staple Gun</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>Stopcock Turnkey</td>
                    <td>5, 19</td>
                </tr>
                <tr>
                    <td>Manual Tile Cutter</td>
                    <td>5</td>
                </tr>
            </table>

            <table class="equipment">
                <caption>Car maintenance</caption>
                <tr>
                    <td>Axle Stand</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>Trolley Jack</td>
                    <td>5</td>
                </tr>
            </table>
        </div>

        <div>

            <table class="equipment">
                <caption>Gardening Aids</caption>
                <tr>
                    <td>3’ Loppers</td>
                    <td>24</td>
                </tr>
                <tr>
                    <td>Cordless Hedge Trimmer</td>
                    <td>19</td>
                </tr>
                <tr>
                    <td>Electric Weed Burner</td>
                    <td>19</td>
                </tr>
                <tr>
                    <td>Extension Cable - 30m</td>
                    <td>19</td>
                </tr>
                <tr>
                    <td>Fence Sprayer</td>
                    <td>9</td>
                </tr>
                <tr>
                    <td>Fertilizer Spreader</td>
                    <td>6, 15</td>
                </tr>
                <tr>
                    <td>Garden Rotary Cultivator</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>Garden Shredder</td>
                    <td>5, 19</td>
                </tr>
                <tr>
                    <td>Garden Spray</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>Garden Vac/Blower</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>Lawn Aerator</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>Lawn Scarifier</td>
                    <td>1, 10</td>
                </tr>
                <tr>
                    <td>Long Tree Pruners</td>
                    <td>8</td>
                </tr>
                <tr>
                    <td>Pole Hedge Trimmer</td>
                    <td>19</td>
                </tr>
                <tr>
                    <td>Pressure Washer</td>
                    <td>19</td>
                </tr>
                <tr>
                    <td>Sack Truck</td>
                    <td>19</td>
                </tr>
                <tr>
                    <td>Tree Saw</td>
                    <td>8</td>
                </tr>
                <tr>
                    <td>Wheelbarrow</td>
                    <td>5, 13</td>
                </tr>
            </table>

            <table class="equipment">
                <caption>Household Aids</caption>
                <tr>
                    <td>Carpet Cleaner</td>
                    <td>19</td>
                </tr>
                <tr>
                    <td>Carpet Stretcher</td>
                    <td>12</td>
                </tr>
                <tr>
                    <td>Pasting Tables</td>
                    <td>5, 19</td>
                </tr>
                <tr>
                    <td>Pipe and Cable Detector</td>
                    <td>13</td>
                </tr>
                <tr>
                    <td>Steam Cleaner</td>
                    <td>8</td>
                </tr>
                <tr>
                    <td>Wallpaper Stripper</td>
                    <td>1</td>
                </tr>
            </table>

        </div>
    </div>


<p class="text-center font-bold  mt-2">Use responsibly. All risk and liability are assumed by the borrower.</p>

    <p class="text-center mt-2">We ask all who use the equipment to treat it as if it was their own and return it
        promptly in a clean condition ready for the next user.</p>

<p class="text-center mt-8 mb-1 font-bold hidden print:block">An up-to-date list is available online: https://mnra.uk/</p>

    <div class="page-break mb-16 print:mb-0"></div>

    
    <div class="flyer">
        <h1 class="text-center font-bold text-2xl mb-4">You are invited to:</h1>
        <h2 class="text-center font-bold text-3xl mb-4">MOUNT NOD RESIDENTS’ ASSOCIATION</h2>
        <h2 class="text-center font-bold text-3xl mb-4"><span class="underline">ANNUAL GENERAL MEETING</span></h2>
        <p class="text-center font-bold text-3xl mb-4">Thursday 15th May 2025, 7:30pm</p>
        <!-- <p class="text-center font-bold text-3xl mb-4">7:30pm</p> -->
        <p class="text-center font-bold text-3xl mb-4">St. John Vianney Church Hall</p>

        <div class="px-6">
            <div class="mb-4 text-center">

                <p>The committee will give a report of the last year, give information about the defibrillator, elect officers, and residents will have the chance to ask questions and discuss the association.</p>
                <p class="font-bold">Also present will be our local councillors who will give a report and answer
                    questions.</p>
            </div>
<hr class="mb-4 border-gray-400">
            <p>All members of the association have access to the equipment <a data-sveltekit-reload href="#equipment" class="underline print:no-underline">listed<span class="hidden print:inline">&nbsp;on the reverse of this notice</span></a>.</p>
            <p class="font-bold">Membership to the association costs £2 a year. You can join and receive your membership
                card:</p>
            <ul class="list-outside ml-6 list-disc mb-4">
                <li>At the AGM</li>
                <li>At the Vale, Nod Rise, Sat 17th May 1:00-3:00pm</li>
                <li>At the Vale, Nod Rise, Mon 19th May 7:00-9:00pm</li>
                <li>When an association collector visits your house in the next few months. Card payments now accepted!</li>
            </ul>
<!-- <p class="mb-4">We should be able to take <em>cashless</em> payments this year.</p> -->
<hr class="mb-4 border-gray-400">

<div class="grid grid-cols-12 ">

<div class="col-span-12 print:col-span-10 content-center text-center font-bold mb-4 ">We now have an Email Newsletter<span class="print:hidden">&nbsp;</span><button class="ml-onclick-form print:hidden underline" onclick="ml('show', 'AwCvYn', true)">click to sign up</button><span class="hidden print:inline">,<br>view our website: https://mnra.uk/ to sign up</span>.</div>
<div class="hidden print:block content-center text-center">
<QRCode data="https://mnra.uk/?utm_source=flyer" width="64" height="64" errorCorrectionLevel="M" />
</div>

</div>

            <p class="text-center">If you are interested becoming more involved in the association please contact Steven Jones at: <a href="mailto:secretary@mnra.uk" class="underline print:no-underline">secretary@mnra.uk</a></p>
        </div>


    </div>

</div>

