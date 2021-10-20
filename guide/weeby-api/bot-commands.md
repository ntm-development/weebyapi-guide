# Bot Commands
The Weeby API bot uses slash commands which can be run on the server.

<DiscordMessages>
    <DiscordMessage profile="bot">
        <template #interactions>
			<DiscordInteraction
				profile="user"
				:command="true"
			>apply</DiscordInteraction>
		</template>
        <strong>/apply</strong> &lt;bot ID&gt; &lt;server count&gt; &lt;reason&gt; <br>
        <i>Submit an application for the API.</i>
    </DiscordMessage>
    <DiscordMessage profile="bot">
        <template #interactions>
			<DiscordInteraction
				profile="user"
				:command="true"
			>token</DiscordInteraction>
		</template>
        <strong>/token</strong> [dm] <br>
        <i>Sends a ephemeral message of your API Token. <br>
        If you want it sent to your DM, set the <code>dm</code> option to true</i>
    </DiscordMessage>
    <DiscordMessage profile="bot">
        <template #interactions>
			<DiscordInteraction
				profile="user"
				:command="true"
			>stats</DiscordInteraction>
		</template>
        <strong>/stats</strong> <br>
        <i>View the current statistics of Weeby API.</i>
    </DiscordMessage>
    <DiscordMessage profile="bot">
        <template #interactions>
			<DiscordInteraction
				profile="user"
				:command="true"
			>help</DiscordInteraction>
		</template>
        <strong>/help</strong> &lt;command&gt; <br>
        <i>Get information about a command.</i>
    </DiscordMessage>
    <DiscordMessage profile="bot">
        <template #interactions>
			<DiscordInteraction
				profile="user"
				:command="true"
			>ping</DiscordInteraction>
		</template>
        <strong>/ping</strong> <br>
        <i>Fetches the current ping of the bot.</i>
    </DiscordMessage>
    <DiscordMessage profile="bot">
        <template #interactions>
			<DiscordInteraction
				profile="user"
				:command="true"
			>docs</DiscordInteraction>
		</template>
        <strong>/docs</strong> [category] [type] <br>
        <i>View endpoint documentation of Weeby API directly.</i>
    </DiscordMessage>
    <DiscordMessage profile="bot">
        <template #interactions>
			<DiscordInteraction
				profile="user"
				:command="true"
			>support</DiscordInteraction>
		</template>
        <strong>/support</strong> [tag] <br>
        <i>Get information about a support article.</i>
    </DiscordMessage>
    <DiscordMessage profile="bot">
        <template #interactions>
			<DiscordInteraction
				profile="user"
				:command="true"
			>wrapper</DiscordInteraction>
		</template>
        <strong>/wrapper</strong> [name] <br>
        <i>Get information about an API wrapper.</i>
    </DiscordMessage>
    <DiscordMessage profile="bot">
        <template #interactions>
			<DiscordInteraction
				profile="user"
				:command="true"
			>about</DiscordInteraction>
		</template>
        <strong>/about</strong> <br>
        <i>Get useful information about Weeby API.</i>
    </DiscordMessage>
</DiscordMessages>
