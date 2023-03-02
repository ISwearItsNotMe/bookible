<script>
	export let data;
	$: ({ users } = data);
</script>

<div class="grid">
	<div>
		<h2>Users:</h2>
		{#each users as user}
			<article>
				<header>{user.surname}</header>
				<ul>
					<li>{user.name} {user.surname}</li>
					<li>{user.email}</li>
					<li>{user.gender == 1 ? "MAN" : "WOMAN"}</li>
				</ul>
				<form action="?/deleteUser&id={user.id}">
					<button class="outline secondary">Delete User</button>
				</form>
				<a href="/{user.id}" role="button" class="outline constrast" style="width:100%">Edit User</a>
			</article>
		{/each}
	</div>
	<form action="?/createUser" method="POST">
		<h3>New User</h3>
		<label for="username">Username</label>
		<input type="text" name="username" id="username" />
		<label for="name">Name</label>
		<input type="text" name="name" id="name" />
		<label for="surname">Surname</label>
		<input type="text" name="surname" id="surname" />
		<label for="email">Email</label>
		<input type="text" name="email" id="email" />
		<label for="gender">Gender</label>
		<input type="number" name="gender" id="gender" />
		<button type="submit">Add User</button>
	</form>
</div>
