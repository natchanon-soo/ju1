function AssessmentFramework({
    data
}){


return (

<div className="dm-framework">


{/* Directory */}

<div className="dm-framework-box">

<h4>
รูปแบบกิจกรรม (Directory)
</h4>


<div className="dm-tag-list">

{
data.directory?.map((item,index)=>(

<span key={index}>
{item.code} : {item.name}
</span>

))
}

</div>


</div>





{/* OKR */}

<div className="dm-framework-box">


<h4>
OKRs
</h4>


{
data.okrs?.map((item,index)=>(


<div 
className="dm-framework-item"
key={index}
>

<strong>
{item.code}
</strong>

<span>
{item.name}
</span>

</div>


))

}


</div>







{/* SDGs */}

<div className="dm-framework-box">


<h4>
SDGs
</h4>


<div className="dm-tag-list">

{
data.sdgs?.map((item,index)=>(

<span key={index}>
{item}
</span>

))

}


</div>


</div>







{/* EGGS */}

<div className="dm-framework-box">


<h4>
EGGS Identity
</h4>



{
Object.entries(data.eggs || {}).map(
([group,items])=>(


<div
className="dm-eggs-group"
key={group}
>


<h5>
{group}
</h5>


<div className="dm-tag-list">


{
items.map((item,index)=>(


<span key={index}>
{item.code} {item.name}
</span>


))
}


</div>


</div>


)

)

}



</div>









{/* KSA */}


<div className="dm-framework-box">


<h4>
KSA Model
</h4>


{
data.ksa?.map((item,index)=>(

<div
className="dm-framework-item"
key={index}
>

<strong>
{item.code}
</strong>


<span>
{item.name}
</span>


</div>

))

}


</div>









{/* Approach */}


<div className="dm-framework-box">


<h4>
Approach
</h4>



<div className="dm-tag-list">


{
data.approach?.map((item,index)=>(

<span key={index}>
{item.code} {item.name}
</span>

))

}


</div>


</div>



</div>


)

}


export default AssessmentFramework;