function isCircular(list)
{
    var node = list.getFirst();
    var result = false;

    if(node)
    {
        var node2 = node.next;

        while(node && node2)
        {
            if(node === node2)
            {
                return true;
            }

            node = node.next;
            node2 = node2.next;
        }
    }

    return result;
}
