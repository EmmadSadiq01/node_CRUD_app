$('#update_user_form').submit(function (event) {
    event.preventDefault();
    var unindexed_array = $(this).serializeArray()
    console.log(unindexed_array)
    var data = {};
    unindexed_array.map((v, k) => {
        data[v.name] = v.value
    })
    var request = {
        "url": `http://localhost:4000/api/updateUser/${data._id}`,
        "method": 'PUT',
        "data": data
    }

    $.ajax(request).done(function (resp) {
        window.location = '/'
        // console.log(resp)
    })
    console.log(request)
})

function delUser(user_id) {
    if (confirm('do you want to delete user?')) {
        var request = {
            url: `http://localhost:4000/api/deleteUser/${user_id}`,
            method: 'delete'
        }
        $.ajax(request).done(function (resp) {
            location.reload();
        })
    }
}