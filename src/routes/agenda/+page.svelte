<script>
    import Agenda from "../../components/Agenda.svelte";
    import AGMAgenda from "../../components/AGMAgenda.svelte";
    import QRCode from '@castlenine/svelte-qrcode';
</script>
<style>
    h3 {
        @apply text-lg font-bold mb-2;
    }
    ol {
        @apply list-outside list-decimal ml-4 pl-2;
    }
    ul {
        @apply list-outside list-disc ml-4 pl-2;
    }
    ol li {
        @apply pl-2;
    }
    table tr th, table tr td {
        @apply py-1;
        @apply px-3;
        vertical-align: center;
    }
    h4 {
        @apply text-base font-bold mb-2;
    }
    h5 {
        @apply text-sm font-bold mb-2;
    }
</style>

<div class="mx-auto py-8 px-2 print:py-0 px-0 sm:max-w-3xl print:max-w-none">
    <h1 class="text-center font-bold text-3xl mb-4">MOUNT NOD RESIDENTS’ ASSOCIATION</h1>

   <h2 class="text-center font-bold text-xl mb-1">AGM 15th May 2025</h2>

    <h3>Welcome!</h3>

    <p class="pb-4">Thank you for joining us this evening. The Mount Nod Residents' Association (MNRA) exists to support our local area. At the moment, that mainly means looking after the community defibrillator and offering shared equipment like carpet cleaners, tile cutters and gardening tools that residents can borrow.</p>
    <p class="pb-4">
        Anyone who lives on the Mount Nod estate is welcome to join the association for £2 each year. We have a small committee of volunteers who help run the association, but we are always looking for more people to get involved. If you’re interested in helping out, please let us know! We’d love to hear from you.
    </p>
    <p class="mb-8">
        Tonight, we’ll look back at what we’ve done over the past year, and explain what we do and ask you what we <em>could</em> do in the future. We'll also elect officers of the association and have a chance to hear from and ask questions to our local councillors.</p>

    <div class="grid grid-cols-2">
        <div>
    <h3 class="text-center">Agenda</h3>
    <ol>
        <li>Welcome</li>
        <li>Apologies</li>
        <li>Minutes of the last AGM</li>
        <li>Matters arising from last AGM</li>
        <li>Treasurer’s Report</li>
        <li>Secretary's Report</li>
        <li>Report on the defibrillator</li>
        <li>What we do – and could do</li>
        <li>Election of officers</li>
        <li>Local councillors report</li>
        <li>Any other business</li>
    </ol>
    </div>
        <div>

            <h3 class="text-center">Balance sheet</h3>
            <table class="text-right ml-auto">
                <tr>
                    <th>&nbsp;</th>
                    <th>6th June 2024</th>
                    <th>15th May 2025</th>
                </tr>
                <tr >
                    <th>Current account</th>
                    <td>£1,053.59</td>
                    <td>£149.93</td>
                </tr>
                <tr>
                    <th>Deposit account</th>
                    <td>£1,667.14</td>
                    <td>£3,273.91</td>
                </tr>
                <tr>
                    <th>Petty cash</th>
                    <td>£64.10</td>
                    <td>£0.00</td>
                </tr>
                <tr class="border-t border-b border-black">
                    <th class="!py-4">Total</th>
                    <td>£2,784.83</td>
                    <td>£3,423.84</td>
                </tr>
            </table>
        </div>

    </div>
    <div class="grid grid-cols-12 page-break mt-10">

        <div class="col-span-10 content-center text-center font-bold mb-4 ">We now have an Email Newsletter,<br> view our website: https://mnra.uk/ to sign up.</div>
        <div class="content-center text-center">
            <QRCode data="https://mnra.uk/?utm_source=flyer" width="64" height="64" errorCorrectionLevel="M" />
        </div>

    </div>

    <div class="">

    <h3 class="text-center">Officer roles</h3>
    <div class="grid grid-cols-2 w-full justify-items-center gap-10 text-sm">
        <div>
            <div class="mb-6">
            <h4>Chair</h4>
            <h5>Leads the residents association and oversees its activities.</h5>
            <ul>
                <li>Chairs meetings and ensures everyone has a chance to contribute.</li>
                <li>Helps set priorities and guides the committee's efforts.</li>
                <li>Acts as a spokesperson for the association when needed.</li>
                <li>Works closely with other officers to keep things running smoothly.</li>
            </ul>
        </div>

            <div class="mb-6">
                <h4>Secretary</h4>
                <h5>Keeps the association organised and informed.</h5>
                <ul>
                    <li>Takes notes (minutes) at meetings and shares them afterwards.</li>
                    <li>Manages correspondence and official records.</li>
                    <li>Helps schedule meetings and sends out notices.</li>
                    <li>Coordinates printing of flyers and membership cards etc.</li>
                    <li>Arranges and coordinates collectors to collect membership fees.</li>
                    <li>Ensures that the defibrillator is checked regularly and is maintained properly.</li>
                    <li>Manages the email newsletter and website</li>
                    <li>Supports communication between members.</li>
                </ul>
            </div></div>
        <div>
            <div class="mb-6">
            <h4>Vice Chair</h4>
            <h5>Supports the Chair and steps in when needed.</h5>
            <ul>
                <li>Assists the Chair in leading the association’s efforts.</li>
                <li>Stands in for the Chair when they are unavailable.</li>
                <li>Helps coordinate meetings and activities.</li>
                <li>Works with other officers to ensure continuity and support.</li>
            </ul>
        </div>

            <div class="mb-6">
                <h4>Treasurer</h4>
                <h5>Looks after the association’s money.</h5>
                <ul>
                    <li>Keeps track of income and spending.</li>
                    <li>Prepares simple financial reports for meetings and the AGM.</li>
                    <li>Ensures any money is spent properly and transparently.</li>
                    <li>Receives funds from collectors to put into the association bank account.</li>
                    <li>Purchases new equipment as needed.</li>
                </ul>
            </div>

            <div class="mb-6">
                <h4>Equipment Manager</h4>
                <h5>Manages any shared equipment the association owns.</h5>
                <ul>
                    <li>Keeps a list of items and where they are stored.</li>
                    <li>Checks items are maintained and in good condition.</li>
                    <li>Lets the committee know if anything needs replacing or repairing.</li>
                    <li>Coordinates with the secretary to update the website with details of the equipment.</li>
                </ul>
            </div>

        </div>



















    </div>
    </div>
   </div>