$(document).ready(function(){
    function score_indicate(){
      let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    let subject_points_kosuu = subject_points.length
    let sum = 0;
    for(let i=0; i<subject_points_kosuu; i++){
      sum = sum + subject_points[i];
    }
    $("#sum_indicate").text(sum);
    $("#average_indicate").text(sum / subject_points_kosuu);
  };

  function get_achievement(){
    let averageIndicate = $("#average_indicate").text();
    if ( averageIndicate >= 80){
      return "A";
    } else if ( averageIndicate >= 60) {
      return "B";
    } else if ( averageIndicate >= 40) {
      return "C";
    } else {
      return "D";
    }
  };

  function get_pass_or_failure(){
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    let number = subject_points.length;
    let judge = "合格";
    for(let i=0; i<number; i++){
      if(subject_points[i]<60){
        judge= "不合格";
        break;
      }
    }
    return judge;
  };

  function judgement(){
    let achievement = get_achievement();
    let pass_or_failure = get_pass_or_failure();
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${achievement}で${pass_or_failure}です</label>`);
  };

  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });
  $('#btn-evaluation').click(function() {
    $("#evaluation").text(get_achievement());
  });
  $('#btn-judge').click(function() {
    $("#judge").text(get_pass_or_failure());
  });
  $('#btn-declaration').click(function() {
    $("declaration").text(judgement());
  });
});
// ここに書かれているjsの記述はあくまでヒントとして用意された雛形なので、書かれている記述に従わずに実装したいという場合は、自分の好きに実装して構わない。課題要件を満たし、コードの品質が一定の水準にあると判定されればどのような実装でも合格になる。
// 例ではJavaScriptとjQueryの両方の記述を使用しているが、どちらかに統一しても構いません。
