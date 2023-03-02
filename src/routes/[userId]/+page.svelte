<script>
    export let data
    $: ({user} = data)
</script>

<form action="?/updateUser" method="POST">
    <h3>Editing {user.surname}</h3>
    <label for="username">Username</label>
    <input type="text" name="username" id="username" value={user.username} />
    <label for="name">Name</label>
    <input type="text" name="name" id="name" value={user.name} />
    <label for="surname">Surname</label>
    <input type="text" name="surname" id="surname" value={user.surname} />
    <label for="email">Email</label>
    <input type="text" name="email" id="email" value={user.email} />
    <label for="gender">Gender</label>
    <input type="number" name="gender" id="gender" value={user.gender} />
    <button type="submit">Edit User</button>
</form>