function masinfo(){
    var adicionalinfo = document.getElementById('adicional-info');
    if (adicionalinfo.classList.contains('hidden'))
    {
        adicionalinfo.classList.remove('hidden');
    }
    else
    {
        adicionalinfo.classList.add('hidden');
    }
}