let comp = [];
var flanking_length = 5;
var brca2_length = 10;
var cfrt_lentgth = 10;
function callFunctions() {
  document.addEventListener("DOMContentLoaded", function () {
    Promise.all([
      fetch('data/exon_s1_34c>a_strengths_clipped.json').then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      }),
      fetch('data/exon_s1_strengths_clipped.json').then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      }),
      fetch('data/exon_s1_comp1_strengths_clipped.json').then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      }),
      fetch('data/BRCA2_og_strengths_clipped.json').then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      }),
      fetch('data/BRCA2_620C>T_strengths_clipped.json').then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      }),
      fetch('data/BRCA2_559G>A_strengths_clipped.json').then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      }),
      fetch('data/BRCA2_551T>C_strengths_clipped.json').then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      }),
      fetch('data/BRCA2_539T>C_strengths_clipped.json').then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
    ])
      .then(([compData, dados, exon_s1_comp1_data, brca2_original, brca2_620C_T,brca2_559G_A,brca2_551T_C,brca2_539T_C]) => {
        comp = compData;

        var svg_name = ".nucleotide-view-exon-s1-mutation"

        var labels = {
          'skip': ["S1 Exon Skipping", "S1 Exon Mutation Skipping"],
          'incl': ["S1 Exon Inclusion", "S1 Exon Mutation Inclusion"]
        }
        nucleotideComparison(dados, comp, svg_name,mutation_name='31C>A', labels);
        // var svg_name = ".nucleotide-view-exon-s1"

        // nucleotideComparisonSingle(dados, comparison = null, svg_name)
        var labels = {
          'skip': ["S1 Exon Skipping", "S1 Exon Comparison Skipping"],
          'incl': ["S1 Exon Inclusion", "S1 Exon Comparison Inclusion"]
        }
        var svg_name = "#nucleotide-view-exon1"
        nucleotideComparisonSingle(dados, svg_name, labels);
        updatePSIBarChart({ psi: 0.15048794448375702, deltaForce: -13.903689982126025 }, '#psi-bar-chart-s1', 'Difference-to-Prediction');

        var svg_name = "#nucleotide-view-exon-comp"
        nucleotideComparisonSingle(exon_s1_comp1_data, svg_name, labels);
        updatePSIBarChart({ psi: 0.15040773153305054, deltaForce: -13.908240915963916 }, '#psi-bar-chart-s1-comparison', ' Difference-to-Prediction');

        var svg_name = ".nucleotide-view-exon-brca2"
        nucleotideComparison2(brca2_original, brca2_620C_T, svg_name,mutation_name="620C>T", labels);
        // remove the numbering. 
        // 2 panels 
        // change the coloring of the bars for normal and the  .1 opacity for the one in the back
        // use the 620C>T and 551T>C
        var svg_name = ".nucleotide-view-exon-brca2-3"
        nucleotideComparison2(brca2_original, brca2_551T_C, svg_name,mutation_name='551T>C', labels);



      })
      .catch(error => {
        console.error("Failed to fetch or parse data:", error);
        // Optionally, inform the user visually
      });
  });
  document.addEventListener("DOMContentLoaded", function () {
    Promise.all([
      fetch('data/exon_s1_comp1_strengths_clipped.json').then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      }),
      fetch('data/exon_s1_comp_grid2_strengths_clipped.json').then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      }),
      fetch('data/exon_s1_comp_grid3_strengths_clipped.json').then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      }),
      fetch('data/exon_s1_comp_grid4_strengths_clipped.json').then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      }),
      fetch('data/exon_s1_comp_grid5_strengths_clipped.json').then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      }),
      fetch('data/exon_s1_comp_grid6_strengths_clipped.json').then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      }),
      fetch('data/exon_s1_comp_grid7_strengths_clipped.json').then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      }),
      fetch('data/exon_s1_comp_grid8_strengths_clipped.json').then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      }),
      fetch('data/exon_s1_comp_grid9_strengths_clipped.json').then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
    ])
      .then((data) => {
        // need to change to the correct data
        //  the number for the nucleotides are not resizgin correctly
        for (let i = 1; i <= 9; i++) {
          let svg_name = `#nucleotide-view-exon-s1-${i}`;
          nucleotideComparisonGrid(data[i - 1], svg_name);
        }
      })
      .catch(error => {
        console.error("Failed to fetch or parse data:", error);
        // Optionally, inform the user visually
      });
  });

}

callFunctions()

function nucleotideComparison(data, comparison, svg_name, mutation_name = '31C>A', classSelected = null) {
  var exon_length = data.sequence.length - flanking_length*2 ;
  var sequence = data.sequence;
  var compSequence = comparison.sequence || [];
  var structs = data.structs;
  var compStructs = comparison.structs || [];
  var dataIncl = data.inclusion;
  var dataSkip = data.skipping;

  if (!comparison.sequence) {
    callFunctions();
  }

  var compIncl = comparison.inclusion || {};
  var compSkip = comparison.skipping || {};


  const svgContainer = d3.select(".nucleotide-view");
  const width = svgContainer.node().clientWidth;
  const height = 400;

  const heightRatio = height / 400;
  const widthRatio = width / 1000;

  var margin = { top: 30, right: 10, bottom: 20, left: 50, middle: 22 };
  var svg_nucl = d3.select(svg_name).attr("width", width).attr("height", height);

  svg_nucl.append("text")
    .attr("x", width / 2)
    .attr("y", margin.top / 2 + 5)
    .attr("text-anchor", "middle")
    .style('font-size', `${14 * widthRatio}px`)
    // .text(compIncl && compSkip ? "Exon View Comparison" : "Exon View");

  var positions = Object.keys(dataSkip).map(pos => parseInt(pos.slice(4)));
  positions.push(positions[positions.length - 1] + 1);
  var x = d3.scaleBand()
    .range([margin.left, (width - margin.right)])
    .domain(positions)
    .paddingInner(0.2)
    .paddingOuter(0.25);

  var xInclAxis = d3.axisBottom(x)
    .tickSize(2 * widthRatio)
    .tickFormat(function (d) {
      if (((d - flanking_length*2) % 10 == 0)) {
        return d - flanking_length*2;
      } else { return "" };
    });

  function comparisonSequence(isMutation = false) {
    flanking_length = 5;
    const sequenceToChange = isMutation ? compSequence : sequence;
    const structToChange = isMutation ? compStructs : structs;
    svg_nucl.selectAll(".x.axis.nuc.ticks").remove(); // Remove the existing nucleotide letter ticks
    svg_nucl.selectAll(".x.axis.struct.ticks").remove();
    var xSkipAxis = d3.axisTop(x)
      .tickSize(2 * widthRatio)
      .tickFormat((d, i) => {
        if (i < structs.length && i < compStructs.length && structs[i] !== compStructs[i]) {
          return structToChange[i];
        }
        return i < structs.length ? structs[i] : '';
      });

    var xNuAxis = d3.axisBottom(x)
      .tickSize(0)
      .tickFormat((d, i) => {
        if (i < sequence.length && i < compSequence.length && sequence[i] !== compSequence[i]) {
          return sequenceToChange[i];
        }
        return i < sequence.length ? sequence[i] : '';
      });

    var gxSkip = svg_nucl.append("g")
      .attr("class", "x axis struct ticks")
      .attr("font-size", `${12 * heightRatio}px`)
      .attr("transform", `translate(0, ${margin.top + (height - margin.top - margin.bottom) / 2 + margin.middle})`)
      .call(xSkipAxis);
    gxSkip.selectAll(".tick line")
      .style("display", "none");

    gxSkip.selectAll(".tick text")
      .attr("font-size", `${12 * widthRatio}px`)
      .attr("fill", (d, i) => {
        if (i < structs.length && i < compStructs.length && structs[i] !== compStructs[i]) {
          return "#BF40BF";
        }
        return (i < flanking_length || i >=  exon_length) ? line_color : nucleotide_color;
      })
      .attr("font-weight", (d, i) => (i < structs.length && i < compStructs.length && structs[i] !== compStructs[i]) ? "bold" : "normal")

    var gxNu = svg_nucl.append("g")
      .attr("class", "x axis nuc ticks")
      .attr("font-size", `${12 * heightRatio}px`)
      .attr("transform", `translate(0, ${margin.top + (height - margin.top - margin.bottom) / 2 - 5})`)
      .attr("id", "#nucleotide ticks")
      .call(xNuAxis);

    gxNu.selectAll('.tick').style("cursor", "pointer");
    gxNu.selectAll("path").style("stroke-width", 0);

    gxNu.selectAll(".tick text")
      .attr("font-size", `${12 * widthRatio}px`)
      .attr("fill", (d, i) => {
        if (i < sequence.length && i < compSequence.length && sequence[i] !== compSequence[i]) {
          return "#BF40BF";
        }
        return (i < flanking_length || i >=exon_length) ? line_color : nucleotide_color;
      })
      .attr("font-weight", (d, i) => (i < sequence.length && i < compSequence.length && sequence[i] !== compSequence[i]) ? "bold" : "normal")
  }

  comparisonSequence()
  var gxIncl = svg_nucl.append("g")
    .attr("class", "x axis")
    .attr("font-size", `${12 * heightRatio}px`)
    .attr("transform", `translate(0, ${margin.top + (height - margin.top - margin.bottom) / 2 - margin.middle})`)
    .call(xInclAxis);


  var max_incl = d3.max(compIncl ? [...Object.values(dataIncl), ...Object.values(compIncl)] : Object.values(dataIncl));
  var max_skip = d3.max(compSkip ? [...Object.values(dataSkip), ...Object.values(compSkip)] : Object.values(dataSkip));

  var yIncl = d3.scaleLinear()
    .domain([0, max_incl])
    .range([margin.top + (height - margin.top - margin.bottom) / 2 - margin.middle, margin.top]);

  var ySkip = d3.scaleLinear()
    .domain([0, max_skip])
    .range([margin.top + (height - margin.top - margin.bottom) / 2 + margin.middle, height - margin.bottom]);

  function drawInclusionAxis(original = false) {
    d3.select(svg_name).selectAll(".y.axis").remove();
    d3.select(svg_name).selectAll(".ylabel_inclusion").remove();

    const barColor = original ? inclusion_color : veryLightBlue;
    const barHighlightColor = original ? veryLightBlue : inclusion_color;

    const lineColor = original ? veryStrongBlue:inclusion_color;
    const lineHighlightColor = original ? inclusion_color : veryStrongBlue;
    var gyIncl = svg_nucl.append("g")
      .attr("class", "y axis")
      .attr("transform", `translate(${margin.left},0)`)
      .attr("font-size", `${12 * heightRatio}px`);
    gyIncl.call(d3.axisLeft(yIncl).ticks(4));

    svg_nucl.append("text")
      .attr("class", "ylabel_inclusion")
      .attr("text-anchor", "middle")
      .attr("x", -(margin.top +120 + (height - margin.top - margin.bottom) / 4 - margin.middle / 2) + 20)
      .attr("y", margin.left)
      .attr("dy", "-2.25em")
      .attr("font-size", `${12 * heightRatio}px`)
      .attr("transform", "rotate(-90)")
      .text("Strength (a.u.)");

    var line = d3.line()
      .x(d => x(parseInt(d[0].slice(4))))
      .y(d => yIncl(d[1]))
      .curve(d3.curveStepAfter);
    

    if (original) {
      if (compIncl) {
        svg_nucl.append("path")
          .datum(Object.entries(compIncl))
          .attr("class", "line incl comparison")
          .attr("d", line)
          .attr("fill", "none")
          .attr("stroke", lineHighlightColor)
          .attr("stroke-width", .5);
        svg_nucl.selectAll("nucleotide-incl-bar")
          .data(Object.entries(compIncl))
          .enter()
          .append("rect")
          .attr("class", function (d) { return "obj incl pos_" + d[0].slice(4); })
          .attr("x", function (d) { return x(parseInt(d[0].slice(4))); })
          .attr("y", function (d) { return yIncl(d[1]); })
          .attr("width", x.bandwidth()*1.25)
          .attr("height", function (d) { return Math.abs(yIncl(0) - yIncl(d[1])); })
          .attr("fill", barHighlightColor)

      }
      svg_nucl.append("path")
        .datum(Object.entries(dataIncl))
        .attr("class", "line incl original")
        .attr("d", line)
        .attr("fill", "none")
        .attr("stroke", lineColor)
        .attr("stroke-width", .5);
      svg_nucl.selectAll("nucleotide-incl-bar")
        .data(Object.entries(dataIncl))
        .enter()
        .append("rect")
        .attr("class", function (d) { return "obj incl pos_" + d[0].slice(4); })
        .attr("x", function (d) { return x(parseInt(d[0].slice(4))); })
        .attr("y", function (d) { return yIncl(d[1]); })
        .attr("width", x.bandwidth()*1.25)
        .attr("height", function (d) { return Math.abs(yIncl(0) - yIncl(d[1])); })
        .attr("fill", barColor)

    } else {
      svg_nucl.append("path")
        .datum(Object.entries(dataIncl))
        .attr("class", "line incl original")
        .attr("d", line)
        .attr("fill", "none")
        .attr("stroke", lineColor)
        .attr("stroke-width", .5);
      svg_nucl.selectAll("nucleotide-incl-bar")
        .data(Object.entries(dataIncl))
        .enter()
        .append("rect")
        .attr("class", function (d) { return "obj incl pos_" + d[0].slice(4); })
        .attr("x", function (d) { return x(parseInt(d[0].slice(4))); })
        .attr("y", function (d) { return yIncl(d[1]); })
        .attr("width", x.bandwidth()*1.25)
        .attr("height", function (d) { return Math.abs(yIncl(0) - yIncl(d[1])); })
        .attr("fill", barColor)

        if (compIncl) {
        svg_nucl.append("path")
          .datum(Object.entries(compIncl))
          .attr("class", "line incl comparison")
          .attr("d", line)
          .attr("fill", "none")
          .attr("stroke", lineHighlightColor)
          .attr("stroke-width", .5);
        svg_nucl.selectAll("nucleotide-incl-bar")
          .data(Object.entries(compIncl))
          .enter()
          .append("rect")
          .attr("class", function (d) { return "obj incl pos_" + d[0].slice(4); })
          .attr("x", function (d) { return x(parseInt(d[0].slice(4))); })
          .attr("y", function (d) { return yIncl(d[1]); })
          .attr("width", x.bandwidth()*1.25)
          .attr("height", function (d) { return Math.abs(yIncl(0) - yIncl(d[1])); })
          .attr("fill", barHighlightColor)

      }
    }

  }

  function drawSkipAxis(original = false) {
    const barColor = original ? skipping_color :veryLightRed ;
    const barHighlightColor = original ? veryLightRed : skipping_color;

    const lineColor = original ? veryStrongRed:skipping_color;
    const lineHighlightColor = original ? skipping_color : veryStrongRed;
    var gySkip = svg_nucl.append("g")
      .attr("class", "y axis")
      .attr("font-size", `${12 * heightRatio}px`)
      .attr("transform", `translate(${margin.left},0)`);
    gySkip.call(d3.axisLeft(ySkip).ticks(4));

    var skipData = Object.entries(dataSkip).filter(d => !isNaN(parseInt(d[0].slice(4))) && !isNaN(d[1]))

    var compSkipData = Object.entries(compSkip).filter(d => !isNaN(parseInt(d[0].slice(4))) && !isNaN(d[1]));
    // For skipData (positive values)
    var extendedSkipData = [];
    skipData.forEach(function (d, i, arr) {
      var xValue = parseInt(d[0].slice(4));
      extendedSkipData.push([xValue, d[1]]);
      if (i < arr.length - 1) {
        extendedSkipData.push([xValue + 1, d[1]]);
      } else {
        // Add extra points to close the path
        extendedSkipData.push([xValue + 1, d[1]]);
        extendedSkipData.push([xValue + 1, 0]);  // Extend one more step at y=0

        extendedSkipData.push([xValue + 2, 0]);  // Extend one more step at y=0
      }
    });

    // For compSkipData (negative values)
    var extendedCompSkipData = [];
    compSkipData.forEach(function (d, i, arr) {
      var xValue = parseInt(d[0].slice(4));
      extendedCompSkipData.push([xValue, d[1]]);
      if (i < arr.length - 1) {
        extendedCompSkipData.push([xValue + 1, d[1]]);
      } else {
        // Add extra points to close the path
        extendedCompSkipData.push([xValue + 1, d[1]]);
        extendedCompSkipData.push([xValue + 1, 0]);  // Extend one more step at y=0

        extendedCompSkipData.push([xValue + 2, 0]);  // Extend one more step at y=0
      }
    });

    var lineSkip = d3.line()
      .x(function (d) { return x(d[0]); })
      .y(function (d) { return ySkip(d[1]); })
      .curve(d3.curveStepAfter)
      .defined(function (d) { return !isNaN(x(d[0])) && !isNaN(ySkip(d[1])); });

    if (original) {
      if (compSkip) {
        svg_nucl.append("path")
          .datum(extendedCompSkipData)
          .attr("class", "line comp-skip original")
          .attr("d", lineSkip)
          .attr("fill", "none")
          .attr("stroke", lineHighlightColor)  // Assuming you have a different color for this line
          .attr("stroke-width", .5);
        svg_nucl.selectAll("nucleotide-skip-bar")
          .data(Object.entries(compSkip))
          .enter()
          .append("rect")
          .attr("class", function (d) { return "obj skip pos_" + d[0].slice(4); })
          .attr("x", function (d) { return x(parseInt(d[0].slice(4))); })
          .attr("y", margin.top + (height - margin.top - margin.bottom) / 2 + margin.middle)
          .attr("width", x.bandwidth()*1.25)
          .attr("height", function (d) { return ySkip(d[1]) - (margin.top + (height - margin.top - margin.bottom) / 2 + margin.middle); })
          .attr("fill", barHighlightColor)
      }
      svg_nucl.append("path")
        .datum(extendedSkipData)
        .attr("class", "line skip original")
        .attr("d", lineSkip)
        .attr("fill", "none")
        .attr("stroke", lineColor)
        .attr("stroke-width", .5);
      svg_nucl.selectAll("nucleotide-skip-bar")
        .data(Object.entries(dataSkip))
        .enter()
        .append("rect")
        .attr("class", function (d) { return "obj skip pos_" + d[0].slice(4); })
        .attr("x", function (d) { return x(parseInt(d[0].slice(4))); })
        .attr("y", margin.top + (height - margin.top - margin.bottom) / 2 + margin.middle)
        .attr("width", x.bandwidth()*1.25)
        .attr("height", function (d) { return ySkip(d[1]) - (margin.top + (height - margin.top - margin.bottom) / 2 + margin.middle); })
        .attr("fill", barColor)


    } else {

      svg_nucl.append("path")
        .datum(extendedSkipData)
        .attr("class", "line skip original")
        .attr("d", lineSkip)
        .attr("fill", "none")
        .attr("stroke", lineColor)
        .attr("stroke-width", .5);
      svg_nucl.selectAll("nucleotide-skip-bar")
        .data(Object.entries(dataSkip))
        .enter()
        .append("rect")
        .attr("class", function (d) { return "obj skip pos_" + d[0].slice(4); })
        .attr("x", function (d) { return x(parseInt(d[0].slice(4))); })
        .attr("y", margin.top + (height - margin.top - margin.bottom) / 2 + margin.middle)
        .attr("width", x.bandwidth()*1.25)
        .attr("height", function (d) { return ySkip(d[1]) - (margin.top + (height - margin.top - margin.bottom) / 2 + margin.middle); })
        .attr("fill", barColor)

      if (compSkip) {
        svg_nucl.append("path")
          .datum(extendedCompSkipData)
          .attr("class", "line comp-skip original")
          .attr("d", lineSkip)
          .attr("fill", "none")
          .attr("stroke", lineHighlightColor)  // Assuming you have a different color for this line
          .attr("stroke-width", .5);
        svg_nucl.selectAll("nucleotide-skip-bar")
          .data(Object.entries(compSkip))
          .enter()
          .append("rect")
          .attr("class", function (d) { return "obj skip pos_" + d[0].slice(4); })
          .attr("x", function (d) { return x(parseInt(d[0].slice(4))); })
          .attr("y", margin.top + (height - margin.top - margin.bottom) / 2 + margin.middle)
          .attr("width", x.bandwidth()*1.25)
          .attr("height", function (d) { return ySkip(d[1]) - (margin.top + (height - margin.top - margin.bottom) / 2 + margin.middle); })
          .attr("fill", barHighlightColor)

      }
    }
  }
  
  function createSliderToggle(svg, x, y) {
    let isActive = true;

    // Create the background (slider track) with less prominent rounded corners
    const trackWidth = 160;
    const trackHeight = 40;
    
    const sliderTrack = svg.append("rect")
      .attr("x", x)
      .attr("y", y)
      .attr("width", trackWidth)
      .attr("height", trackHeight)
      .attr("rx", 7)  // Reduced rounded corners
      .attr("ry", 7)  // Reduced rounded corners
      .style("fill", "#f0f0f0")
      .style("cursor", "pointer");

    // Create the sliding handle with less prominent rounded corners
    const handle = svg.append("rect")
      .attr("x", x + 4)
      .attr("y", y + 4)
      .attr("width", (trackWidth / 2) - 8)
      .attr("height", trackHeight - 8)
      .attr("rx", 5)  // Reduced rounded corners
      .attr("ry", 5)  // Reduced rounded corners
      .style("fill", "white")  // Removed the stroke (border)
      .style("cursor", "pointer");

    // Create the "Original" label
    const label1 = svg.append("text")
      .attr("x", x + (trackWidth / 4))  // Center for first half
      .attr("y", y + (trackHeight / 1.6))  // Vertically center the text
      .attr("text-anchor", "middle")
      .style('font-size', '16px')
      .style('font-weight', "bold")
      .attr("fill", "black")
      .style("cursor", "pointer")
      .text("Original");

    // Create the "31C>A" label
    const label2 = svg.append("text")
      .attr("x", x + (3 * trackWidth / 4))  // Center for second half
      .attr("y", y + (trackHeight / 1.6))
      .attr("text-anchor", "middle")
      .style('font-size', '16px')
      .style('font-weight', "normal")
      .attr("fill", "black")
      .style("cursor", "pointer")
      .text(mutation_name);

    // Function to toggle slider state and update graph
    function toggleSlider() {
        if (isActive) {
            // Move the handle to the second position
            handle.transition().attr("x", x + trackWidth / 2 + 5);
            label1.style("font-weight", "normal");
            label2.style("font-weight", "bold");
        } else {
            // Move the handle to the first position
            handle.transition().attr("x", x + 5);
            label1.style("font-weight", "bold");
            label2.style("font-weight", "normal");
        }
        isActive = !isActive;

        // Call functions based on isActive state
        drawInclusionAxis(isActive);
        drawSkipAxis(isActive);
        comparisonSequence(!isActive);
    }

    // Add click events for both labels and slider track
    sliderTrack.on("click", toggleSlider);
    label1.on("click", function() {
        if (!isActive) toggleSlider();  // Toggle only if it's not active
    });
    label2.on("click", function() {
        if (isActive) toggleSlider();  // Toggle only if it's active
    });

    // Ensure graph is displayed at the initial stage
    drawInclusionAxis(isActive);
    drawSkipAxis(isActive);
    comparisonSequence(!isActive);
}

// Initialize the slider toggle
createSliderToggle(svg_nucl, 70, 40);

  return svg_nucl;
}

function nucleotideComparison2(data, comparison, svg_name, mutation_name = '31C>A', classSelected = null) {
  var exon_length = data.sequence.length - flanking_length*2 ;
  var sequence = data.sequence;
  var compSequence = comparison.sequence || [];
  var structs = data.structs;
  var compStructs = comparison.structs || [];
  var dataIncl = data.inclusion;
  var dataSkip = data.skipping;

  if (!comparison.sequence) {
    callFunctions();
  }

  var compIncl = comparison.inclusion || {};
  var compSkip = comparison.skipping || {};


  const svgContainer = d3.select(".nucleotide-view");
  const width = svgContainer.node().clientWidth;
  const height = 400;

  const heightRatio = height / 400;
  const widthRatio = width / 1000;

  var margin = { top: 30, right: 10, bottom: 20, left: 50, middle: 22 };
  var svg_nucl = d3.select(svg_name).attr("width", width).attr("height", height);

  svg_nucl.append("text")
    .attr("x", width / 2)
    .attr("y", margin.top / 2 + 5)
    .attr("text-anchor", "middle")
    .style('font-size', `${14 * widthRatio}px`)
    // .text(compIncl && compSkip ? "Exon View Comparison" : "Exon View");

  var positions = Object.keys(dataSkip).map(pos => parseInt(pos.slice(4)));
  positions.push(positions[positions.length - 1] + 1);
  var x = d3.scaleBand()
    .range([margin.left, (width - margin.right)])
    .domain(positions)
    .paddingInner(0.2)
    .paddingOuter(0.25);

  var xInclAxis = d3.axisBottom(x)
    .tickSize(2 * widthRatio)
    .tickFormat(function (d) {
      return ""
    });

  function comparisonSequence(isMutation = false) {
    flanking_length = 5;
    const sequenceToChange = isMutation ? compSequence : sequence;
    const structToChange = isMutation ? compStructs : structs;
    svg_nucl.selectAll(".x.axis.nuc.ticks").remove(); // Remove the existing nucleotide letter ticks
    svg_nucl.selectAll(".x.axis.struct.ticks").remove();
    var xSkipAxis = d3.axisTop(x)
      .tickSize(2 * widthRatio)
      .tickFormat((d, i) => {
        if (i < structs.length && i < compStructs.length && structs[i] !== compStructs[i]) {
          return structToChange[i];
        }
        return i < structs.length ? structs[i] : '';
      });

    var xNuAxis = d3.axisBottom(x)
      .tickSize(0)
      .tickFormat((d, i) => {
        if (i < sequence.length && i < compSequence.length && sequence[i] !== compSequence[i]) {
          return sequenceToChange[i];
        }
        return i < sequence.length ? sequence[i] : '';
      });

    var gxSkip = svg_nucl.append("g")
      .attr("class", "x axis struct ticks")
      .attr("font-size", `${12 * heightRatio}px`)
      .attr("transform", `translate(0, ${margin.top + (height - margin.top - margin.bottom) / 2 + margin.middle})`)
      .call(xSkipAxis);
      
    gxSkip.selectAll(".tick line")
      .style("display", "none");

    gxSkip.selectAll(".tick text")
      .attr("font-size", `${12 * widthRatio}px`)
      .attr("fill", (d, i) => {
        if (i < structs.length && i < compStructs.length && structs[i] !== compStructs[i]) {
          return "#BF40BF";
        }
        return (i < flanking_length || i >=  exon_length) ? line_color : nucleotide_color;
      })
      .attr("font-weight", (d, i) => (i < structs.length && i < compStructs.length && structs[i] !== compStructs[i]) ? "bold" : "normal")

    var gxNu = svg_nucl.append("g")
      .attr("class", "x axis nuc ticks")
      .attr("font-size", `${12 * heightRatio}px`)
      .attr("transform", `translate(0, ${margin.top + (height - margin.top - margin.bottom) / 2 - 5})`)
      .attr("id", "#nucleotide ticks")
      .call(xNuAxis);

    gxNu.selectAll('.tick').style("cursor", "pointer");
    gxNu.selectAll("path").style("stroke-width", 0);

    gxNu.selectAll(".tick text")
    .attr("font-size", `${10 * widthRatio}px`)
    .attr("fill", (d, i) => {
      if (i < sequence.length && i < compSequence.length && sequence[i] !== compSequence[i]) {
        return "#BF40BF";
      }
      return (i < flanking_length || i >= exon_length) ? line_color : nucleotide_color;
    })
    .attr("font-weight", (d, i) => (i < sequence.length && i < compSequence.length && sequence[i] !== compSequence[i]) ? "bold" : "normal")
    .attr("y", (d, i, nodes) => {
      const currentY = d3.select(nodes[i]).attr("y") || 0; // Get current 'y' or default to 0
      return +currentY - 5; // Move the text up by reducing the 'y' value
    });
  
  }

  comparisonSequence()
  var gxIncl = svg_nucl.append("g")
    .attr("class", "x axis")
    .attr("font-size", `${12 * heightRatio}px`)
    .attr("transform", `translate(0, ${margin.top + (height - margin.top - margin.bottom) / 2 - margin.middle})`)
    .call(xInclAxis);


  var max_incl = d3.max(compIncl ? [...Object.values(dataIncl), ...Object.values(compIncl)] : Object.values(dataIncl));
  var max_skip = d3.max(compSkip ? [...Object.values(dataSkip), ...Object.values(compSkip)] : Object.values(dataSkip));

  var yIncl = d3.scaleLinear()
    .domain([0, max_incl])
    .range([margin.top + (height - margin.top - margin.bottom) / 2 - margin.middle, margin.top]);

  var ySkip = d3.scaleLinear()
    .domain([0, max_skip])
    .range([margin.top + (height - margin.top - margin.bottom) / 2 + margin.middle, height - margin.bottom]);
  var veryLightBlue = "#E3EAF9";
  var veryLightRed = "#F9E3E3";
  function drawInclusionAxis(original = false) {
    d3.select(svg_name).selectAll(".y.axis").remove();
    d3.select(svg_name).selectAll(".ylabel_inclusion").remove();

    const barColor = original ? inclusion_color : veryLightBlue;
    const barHighlightColor = original ? veryLightBlue : inclusion_color;

    const lineColor = original ? veryStrongBlue:inclusion_color;
    const lineHighlightColor = original ? inclusion_color : veryStrongBlue;
    var gyIncl = svg_nucl.append("g")
      .attr("class", "y axis")
      .attr("transform", `translate(${margin.left},0)`)
      .attr("font-size", `${12 * heightRatio}px`);
    gyIncl.call(d3.axisLeft(yIncl).ticks(4));

    svg_nucl.append("text")
      .attr("class", "ylabel_inclusion")
      .attr("text-anchor", "middle")
      .attr("x", -(margin.top +120 + (height - margin.top - margin.bottom) / 4 - margin.middle / 2) + 20)
      .attr("y", margin.left)
      .attr("dy", "-2.25em")
      .attr("font-size", `${12 * heightRatio}px`)
      .attr("transform", "rotate(-90)")
      .text("Strength (a.u.)");

    var line = d3.line()
      .x(d => x(parseInt(d[0].slice(4))))
      .y(d => yIncl(d[1]))
      .curve(d3.curveStepAfter);
    

    if (original) {
      if (compIncl) {
        svg_nucl.append("path")
          .datum(Object.entries(compIncl))
          .attr("class", "line incl comparison")
          .attr("d", line)
          .attr("fill", "none")
          .attr("stroke", lineHighlightColor)
          .attr("stroke-width", .5);
        svg_nucl.selectAll("nucleotide-incl-bar")
          .data(Object.entries(compIncl))
          .enter()
          .append("rect")
          .attr("class", function (d) { return "obj incl pos_" + d[0].slice(4); })
          .attr("x", function (d) { return x(parseInt(d[0].slice(4))); })
          .attr("y", function (d) { return yIncl(d[1]); })
          .attr("width", x.bandwidth()*1.25)
          .attr("height", function (d) { return Math.abs(yIncl(0) - yIncl(d[1])); })
          .attr("fill", barHighlightColor)

      }
      svg_nucl.append("path")
        .datum(Object.entries(dataIncl))
        .attr("class", "line incl original")
        .attr("d", line)
        .attr("fill", "none")
        .attr("stroke", lineColor)
        .attr("stroke-width", .5);
      svg_nucl.selectAll("nucleotide-incl-bar")
        .data(Object.entries(dataIncl))
        .enter()
        .append("rect")
        .attr("class", function (d) { return "obj incl pos_" + d[0].slice(4); })
        .attr("x", function (d) { return x(parseInt(d[0].slice(4))); })
        .attr("y", function (d) { return yIncl(d[1]); })
        .attr("width", x.bandwidth()*1.25)
        .attr("height", function (d) { return Math.abs(yIncl(0) - yIncl(d[1])); })
        .attr("fill", barColor)

    } else {
      svg_nucl.append("path")
        .datum(Object.entries(dataIncl))
        .attr("class", "line incl original")
        .attr("d", line)
        .attr("fill", "none")
        .attr("stroke", lineColor)
        .attr("stroke-width", .5);
      svg_nucl.selectAll("nucleotide-incl-bar")
        .data(Object.entries(dataIncl))
        .enter()
        .append("rect")
        .attr("class", function (d) { return "obj incl pos_" + d[0].slice(4); })
        .attr("x", function (d) { return x(parseInt(d[0].slice(4))); })
        .attr("y", function (d) { return yIncl(d[1]); })
        .attr("width", x.bandwidth()*1.25)
        .attr("height", function (d) { return Math.abs(yIncl(0) - yIncl(d[1])); })
        .attr("fill", barColor)

        if (compIncl) {
        svg_nucl.append("path")
          .datum(Object.entries(compIncl))
          .attr("class", "line incl comparison")
          .attr("d", line)
          .attr("fill", "none")
          .attr("stroke", lineHighlightColor)
          .attr("stroke-width", .5);
        svg_nucl.selectAll("nucleotide-incl-bar")
          .data(Object.entries(compIncl))
          .enter()
          .append("rect")
          .attr("class", function (d) { return "obj incl pos_" + d[0].slice(4); })
          .attr("x", function (d) { return x(parseInt(d[0].slice(4))); })
          .attr("y", function (d) { return yIncl(d[1]); })
          .attr("width", x.bandwidth()*1.25)
          .attr("height", function (d) { return Math.abs(yIncl(0) - yIncl(d[1])); })
          .attr("fill", barHighlightColor)

      }
    }

  }

  function drawSkipAxis(original = false) {
    const barColor = original ? skipping_color :veryLightRed ;
    const barHighlightColor = original ? veryLightRed : skipping_color;

    const lineColor = original ? veryStrongRed:skipping_color;
    const lineHighlightColor = original ? skipping_color : veryStrongRed;
    var gySkip = svg_nucl.append("g")
      .attr("class", "y axis")
      .attr("font-size", `${12 * heightRatio}px`)
      .attr("transform", `translate(${margin.left},0)`);
    gySkip.call(d3.axisLeft(ySkip).ticks(4));

    var skipData = Object.entries(dataSkip).filter(d => !isNaN(parseInt(d[0].slice(4))) && !isNaN(d[1]))

    var compSkipData = Object.entries(compSkip).filter(d => !isNaN(parseInt(d[0].slice(4))) && !isNaN(d[1]));
    // For skipData (positive values)
    var extendedSkipData = [];
    skipData.forEach(function (d, i, arr) {
      var xValue = parseInt(d[0].slice(4));
      extendedSkipData.push([xValue, d[1]]);
      if (i < arr.length - 1) {
        extendedSkipData.push([xValue + 1, d[1]]);
      } else {
        // Add extra points to close the path
        extendedSkipData.push([xValue + 1, d[1]]);
        extendedSkipData.push([xValue + 1, 0]);  // Extend one more step at y=0

        extendedSkipData.push([xValue + 2, 0]);  // Extend one more step at y=0
      }
    });

    // For compSkipData (negative values)
    var extendedCompSkipData = [];
    compSkipData.forEach(function (d, i, arr) {
      var xValue = parseInt(d[0].slice(4));
      extendedCompSkipData.push([xValue, d[1]]);
      if (i < arr.length - 1) {
        extendedCompSkipData.push([xValue + 1, d[1]]);
      } else {
        // Add extra points to close the path
        extendedCompSkipData.push([xValue + 1, d[1]]);
        extendedCompSkipData.push([xValue + 1, 0]);  // Extend one more step at y=0

        extendedCompSkipData.push([xValue + 2, 0]);  // Extend one more step at y=0
      }
    });

    var lineSkip = d3.line()
      .x(function (d) { return x(d[0]); })
      .y(function (d) { return ySkip(d[1]); })
      .curve(d3.curveStepAfter)
      .defined(function (d) { return !isNaN(x(d[0])) && !isNaN(ySkip(d[1])); });

    if (original) {
      if (compSkip) {
        svg_nucl.append("path")
          .datum(extendedCompSkipData)
          .attr("class", "line comp-skip original")
          .attr("d", lineSkip)
          .attr("fill", "none")
          .attr("stroke", lineHighlightColor)  // Assuming you have a different color for this line
          .attr("stroke-width", .5);
        svg_nucl.selectAll("nucleotide-skip-bar")
          .data(Object.entries(compSkip))
          .enter()
          .append("rect")
          .attr("class", function (d) { return "obj skip pos_" + d[0].slice(4); })
          .attr("x", function (d) { return x(parseInt(d[0].slice(4))); })
          .attr("y", margin.top + (height - margin.top - margin.bottom) / 2 + margin.middle)
          .attr("width", x.bandwidth()*1.25)
          .attr("height", function (d) { return ySkip(d[1]) - (margin.top + (height - margin.top - margin.bottom) / 2 + margin.middle); })
          .attr("fill", barHighlightColor)
      }
      svg_nucl.append("path")
        .datum(extendedSkipData)
        .attr("class", "line skip original")
        .attr("d", lineSkip)
        .attr("fill", "none")
        .attr("stroke", lineColor)
        .attr("stroke-width", .5);
      svg_nucl.selectAll("nucleotide-skip-bar")
        .data(Object.entries(dataSkip))
        .enter()
        .append("rect")
        .attr("class", function (d) { return "obj skip pos_" + d[0].slice(4); })
        .attr("x", function (d) { return x(parseInt(d[0].slice(4))); })
        .attr("y", margin.top + (height - margin.top - margin.bottom) / 2 + margin.middle)
        .attr("width", x.bandwidth()*1.25)
        .attr("height", function (d) { return ySkip(d[1]) - (margin.top + (height - margin.top - margin.bottom) / 2 + margin.middle); })
        .attr("fill", barColor)


    } else {

      svg_nucl.append("path")
        .datum(extendedSkipData)
        .attr("class", "line skip original")
        .attr("d", lineSkip)
        .attr("fill", "none")
        .attr("stroke", lineColor)
        .attr("stroke-width", .5);
      svg_nucl.selectAll("nucleotide-skip-bar")
        .data(Object.entries(dataSkip))
        .enter()
        .append("rect")
        .attr("class", function (d) { return "obj skip pos_" + d[0].slice(4); })
        .attr("x", function (d) { return x(parseInt(d[0].slice(4))); })
        .attr("y", margin.top + (height - margin.top - margin.bottom) / 2 + margin.middle)
        .attr("width", x.bandwidth()*1.25)
        .attr("height", function (d) { return ySkip(d[1]) - (margin.top + (height - margin.top - margin.bottom) / 2 + margin.middle); })
        .attr("fill", barColor)

      if (compSkip) {
        svg_nucl.append("path")
          .datum(extendedCompSkipData)
          .attr("class", "line comp-skip original")
          .attr("d", lineSkip)
          .attr("fill", "none")
          .attr("stroke", lineHighlightColor)  // Assuming you have a different color for this line
          .attr("stroke-width", .5);
        svg_nucl.selectAll("nucleotide-skip-bar")
          .data(Object.entries(compSkip))
          .enter()
          .append("rect")
          .attr("class", function (d) { return "obj skip pos_" + d[0].slice(4); })
          .attr("x", function (d) { return x(parseInt(d[0].slice(4))); })
          .attr("y", margin.top + (height - margin.top - margin.bottom) / 2 + margin.middle)
          .attr("width", x.bandwidth()*1.25)
          .attr("height", function (d) { return ySkip(d[1]) - (margin.top + (height - margin.top - margin.bottom) / 2 + margin.middle); })
          .attr("fill", barHighlightColor)

      }
    }
  }
  
  
  function createSliderToggle(svg, x, y) {
    let isActive = true;

    // Create the background (slider track) with less prominent rounded corners
    const trackWidth = 160;
    const trackHeight = 40;
    
    const sliderTrack = svg.append("rect")
      .attr("x", x)
      .attr("y", y)
      .attr("width", trackWidth)
      .attr("height", trackHeight)
      .attr("rx", 7)  // Reduced rounded corners
      .attr("ry", 7)  // Reduced rounded corners
      .style("fill", "#f0f0f0")
      .style("cursor", "pointer");

    // Create the sliding handle with less prominent rounded corners
    const handle = svg.append("rect")
      .attr("x", x + 4)
      .attr("y", y + 4)
      .attr("width", (trackWidth / 2) - 8)
      .attr("height", trackHeight - 8)
      .attr("rx", 5)  // Reduced rounded corners
      .attr("ry", 5)  // Reduced rounded corners
      .style("fill", "white")  // Removed the stroke (border)
      .style("cursor", "pointer");

    // Create the "Original" label
    const label1 = svg.append("text")
      .attr("x", x + (trackWidth / 4))  // Center for first half
      .attr("y", y + (trackHeight / 1.6))  // Vertically center the text
      .attr("text-anchor", "middle")
      .style('font-size', '16px')
      .style('font-weight', "bold")
      .attr("fill", "black")
      .style("cursor", "pointer")
      .text("Original");

    // Create the "31C>A" label
    const label2 = svg.append("text")
      .attr("x", x + (3 * trackWidth / 4))  // Center for second half
      .attr("y", y + (trackHeight / 1.6))
      .attr("text-anchor", "middle")
      .style('font-size', '16px')
      .style('font-weight', "normal")
      .attr("fill", "black")
      .style("cursor", "pointer")
      .text(mutation_name);

    // Function to toggle slider state and update graph
    function toggleSlider() {
        if (isActive) {
            // Move the handle to the second position
            handle.transition().attr("x", x + trackWidth / 2 + 5);
            label1.style("font-weight", "normal");
            label2.style("font-weight", "bold");
        } else {
            // Move the handle to the first position
            handle.transition().attr("x", x + 5);
            label1.style("font-weight", "bold");
            label2.style("font-weight", "normal");
        }
        isActive = !isActive;

        // Call functions based on isActive state
        drawInclusionAxis(isActive);
        drawSkipAxis(isActive);
        comparisonSequence(!isActive);
    }

    // Add click events for both labels and slider track
    sliderTrack.on("click", toggleSlider);
    label1.on("click", function() {
        if (!isActive) toggleSlider();  // Toggle only if it's not active
    });
    label2.on("click", function() {
        if (isActive) toggleSlider();  // Toggle only if it's active
    });

    // Ensure graph is displayed at the initial stage
    drawInclusionAxis(isActive);
    drawSkipAxis(isActive);
    comparisonSequence(!isActive);
}

// Initialize the slider toggle
createSliderToggle(svg_nucl, 70, 40);

  return svg_nucl;
}

function nucleotideComparisonSingle(data, svg_name, classSelected = null) {
  if(svg_name === "#nucleotide-view-exon1" || svg_name === "#nucleotide-view-exon-comp"){ 
    flanking_length = 5

  }else{  
    flanking_length= 15
  } 
  var title = ''
  if (svg_name === "#nucleotide-view-exon-brca2" ||svg_name === "#nucleotide-view-exon-cfrt") {
    var title = svg_name === "#nucleotide-view-exon-brca2" ? "BRCA2 exon 7" : "CFTR exon 13";
  }else{
    var title = svg_name === "#nucleotide-view-exon1" ? "Comparison 1" : "Comparison 2";
  }
  var exon_length = data.sequence.length - flanking_length * 2;
  var sequence = data.sequence;
  var structs = data.structs;
  var dataIncl = data.inclusion;
  var dataSkip = data.skipping;

  svg = d3.select(svg_name)
  svg.selectAll("*").remove();

  const svgContainer = d3.select(svg_name); // Ensure you have a container with this class
  const width = svgContainer.node().clientWidth;
  const height = svgContainer.node().clientHeight;
  const heightRatio = height / 400;
  const widthRatio = width / 1000;

  var margin = { top: 30, right: 10, bottom: 20, left: 50, middle: 22 };
  var svg_nucl = d3.select(svg_name);
  // Title
  svg_nucl.append("text")
    .attr("x", width / 2)
    .attr("y", margin.top / 2 + 5)
    .attr("text-anchor", "middle")
    .style('font-size', `${14 * widthRatio}px`)
    .text(title);

  // Add X axis
  var positions = Array.from(new Array(sequence.length + 1), (x, i) => i + 1);
  var x = d3.scaleBand()
    .range([margin.left, (width - margin.right)])
    .domain(positions)


  var xInclAxis = d3.axisBottom(x)
    .tickSize(2 * widthRatio)
    .tickFormat(function (d) {
      if (((d - flanking_length) % 10 == 0 && (d - flanking_length)>=0 && (d - flanking_length) < exon_length || d == exon_length + flanking_length)) {
        return d - flanking_length;
      } else { return "" };
      return Array.from(structs)[d - 1];
    });
  var xSkipAxis = d3.axisTop(x)
    .tickSize(2 * widthRatio)
    .tickFormat(function (d) {
      return Array.from(structs)[d - 1];
    });
  var xNuAxis = d3.axisBottom(x)
    .tickSize(0)
    .tickFormat(function (d) {
      return Array.from(sequence)[d - 1];
    });
  var gxIncl = svg_nucl.append("g")
    .attr("class", "x axis")
    .attr("font-size", `${12 * heightRatio}px`)
    .attr("transform", "translate(0," + (margin.top + (height - margin.top - margin.bottom) / 2 - margin.middle) + ")")
    .call(xInclAxis);
  var gxSkip = svg_nucl.append("g")
    .attr("class", "x axis")
    .attr("font-size", `${12 * heightRatio}px`)
    .attr("transform", "translate(0," + (margin.top + (height - margin.top - margin.bottom) / 2 + margin.middle) + ")")
    .call(xSkipAxis);
  var gxNu = svg_nucl.append("g")
    .attr("class", "x axis")
    .attr("font-size", `${12 * heightRatio}px`)
    .attr("transform", "translate(0," + (margin.top + (height - margin.top - margin.bottom) / 2 - 5) + ")")
    .call(xNuAxis)
  var colors = [skipping_color, skipping_highlight_color, inclusion_color, inclusion_highlight_color]
  gxNu.call(xNuAxis)
    .selectAll('.tick')
    .style("cursor", "pointer")
    .on('click', function (event, d) {
      // Reset all bars to low opacity
      svg_nucl.selectAll(".obj.incl, .obj.skip").attr("opacity", 0.1);

      // Reset all nucleotides to normal font weight
      gxNu.selectAll('.tick text').style("font-weight", "normal");

      // Make the clicked nucleotide bold
      d3.select(this).select('text').style("font-weight", "bold");

      var letter = Array.from(sequence)[d - 1];
      var position = String(d);
      var pos = "pos_" + String(d);

      // Highlight the clicked bars
      svg_nucl.select(`.obj.incl.${pos}`)
        .style("fill", inclusion_highlight_color)
        .attr("opacity", 1);
      svg_nucl.select(`.obj.skip.${pos}`)
        .style("fill", skipping_highlight_color)
        .attr("opacity", 1);
    });
  gxSkip.selectAll(".tick line")
    .style("display", "none");
  gxNu.selectAll("path")
    .style("stroke-width", 0);
  gxNu.selectAll(".tick")
    .each(function (d, i) {
      d3.select(this)
        .select("text")
        .attr("font-size", `${12 * widthRatio}px`)
        .attr("fill", (d <= flanking_length || d > flanking_length + exon_length) ? line_color : nucleotide_color)
    });

  var max_incl = d3.max(Object.values(data.inclusion));
  var max_skip = d3.max(Object.values(data.skipping));


  if (svg_name === "#nucleotide-view-exon1" || svg_name === "#nucleotide-view-exon-comp") {
    var max_strength = 4.5;
  }else{
      var max_strength = d3.max([max_incl, max_skip]);

  }
  var yIncl = d3.scaleLinear()
    .domain([0, max_strength])
    .range([margin.top + (height - margin.top - margin.bottom) / 2 - margin.middle, margin.top]);
  var ySkip = d3.scaleLinear()
    .domain([0, max_strength])
    .range([margin.top + (height - margin.top - margin.bottom) / 2 + margin.middle, height - margin.bottom]);



  const InclusionAxis = (color = false) => {
    const barColor = color ? lightOther : inclusion_color;
    const barHighlightColor = color ? darkBackground : inclusion_highlight_color;
    const lineColor = color ? lightOther : inclusion_color;
    const lineHighlightColor = color ? darkBackground : inclusion_highlight_color;

    var gyIncl = svg_nucl.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + margin.left + ",0)")
      .attr("font-size", `${12 * heightRatio}px`)
    gyIncl.call(d3.axisLeft(yIncl).ticks(4));

    svg_nucl.append("text")
      .attr("class", "ylabel_inclusion")
      .attr("text-anchor", "middle")
      .attr("x", -(margin.top +120 + (height - margin.top - margin.bottom) / 4 - margin.middle / 2))
      .attr("y", margin.left)
      .attr("dy", "-2.25em")
      .attr("font-size", `${12 * heightRatio}px`)
      .attr("transform", "rotate(-90)")
      .text("Strength (a.u.)");
    var extendedData = [];
    Object.entries(dataIncl).forEach(function (d, i, arr) {
      var xValue = parseInt(d[0].slice(4));
      extendedData.push([xValue, d[1]]);
      if (i < arr.length - 1) {
        extendedData.push([xValue + 1, d[1]]);
      } else {
        // Add two extra points to close the path
        extendedData.push([xValue + 1, d[1]]);
        extendedData.push([xValue + 1, 0]);  // Close to y=0
        extendedData.push([xValue + 2, 0]);  // Extend one more step at y=0
      }
    });

    // Draw the line along the edges of the bars
    var line = d3.line()
      .x(function (d) { return x(d[0]); })
      .y(function (d) { return yIncl(d[1]); })
      .curve(d3.curveStepAfter);

    svg_nucl.append("path")
      .datum(extendedData)
      .attr("class", "line incl original")
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", lineHighlightColor)
      .style("stroke-width", "2px"); // Add px and !important if necessary

    // Draw the bars
    svg_nucl.selectAll("nucleotide-incl-bar")
      .data(Object.entries(data.inclusion))
      .enter()
      .append("rect")
      .attr("class", function (d) { return "obj incl pos_" + d[0].slice(4); })
      .attr("x", function (d) { return x(parseInt(d[0].slice(4))); })
      .attr("y", function (d) { return yIncl(d[1]); })
      .attr("width", x.bandwidth())
      .attr("height", function (d) { return Math.abs(yIncl(0) - yIncl(d[1])); })
      .attr("fill", barColor)
      .attr("opacity", .1)


      .lower()
      .on("click", function (d) {
        d3.selectAll(".obj.incl")
          .style("fill", inclusion_color)
          .attr("opacity", 0.1)
          .classed("free", true);
        d3.selectAll(".obj.skip")
          .style("fill", skipping_color)
          .attr("opacity", 0.1)

          .classed("free", true);
        d3.selectAll(".obj.nt")
          .style("font-weight", "normal")
          .classed("free", true);

        var pos = d3.select(this)
          .attr("class")
          .slice(9, -4);
        d3.select(".obj.incl.free." + pos)
          .style("fill", inclusion_highlight_color)
          .attr("opacity", 1)
          .classed("free", false);
        d3.select(".obj.skip.free." + pos)
          .style("fill", skipping_highlight_color)
          .attr("opacity", 1)

          .classed("free", false);
        d3.select(".obj.nt." + pos)
          .style("font-weight", "bold")
          .classed("free", false);

      });
  }

  const SkipAxis = (color = false) => {
    const lineColor = color ? lightOther : skipping_color;
    const lineHighlightColor = color ? darkBackground : skipping_highlight_color;

    const barColor = color ? lightOther : skipping_color;
    const barHighlightColor = color ? darkBackground : skipping_highlight_color;

    var gySkip = svg_nucl.append("g")
      .attr("class", "y axis")
      .attr("font-size", `${12 * heightRatio}px`)
      .attr("transform", "translate(" + margin.left + ",0)");
    gySkip.call(d3.axisLeft(ySkip).ticks(4));

    // Create extended data points to mark the left and right edges of each bar
    var extendedSkipData = [];
    Object.entries(dataSkip).forEach(function (d, i, arr) {
      var xValue = parseInt(d[0].slice(4));
      extendedSkipData.push([xValue, d[1]]);
      if (i < arr.length - 1) {
        extendedSkipData.push([xValue + 1, d[1]]);
      } else {
        // Add two extra points to close the path
        extendedSkipData.push([xValue + 1, d[1]]);
        extendedSkipData.push([xValue + 1, 0]);  // Close to y=0
        extendedSkipData.push([xValue + 2, 0]);  // Extend one more step at y=0
      }
    });

    // Draw the line along the edges of the bars
    var line = d3.line()
      .x(function (d) { return x(d[0]); })
      .y(function (d) { return ySkip(d[1]); })
      .curve(d3.curveStepAfter)
      .defined(function (d) { return !isNaN(x(d[0])) && !isNaN(ySkip(d[1])); });

    svg_nucl.append("path")
      .datum(extendedSkipData)
      .attr("class", "line skip original")
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", lineHighlightColor)
      .style("stroke-width", "2px"); // Add px and !important if necessary
    // Draw the bars
    svg_nucl.selectAll("nucleotide-skip-bar")
      .data(Object.entries(data.skipping))
      .enter()
      .append("rect")
      .attr("class", function (d) { return "obj skip pos_" + d[0].slice(4); })
      .attr("x", function (d) { return x(parseInt(d[0].slice(4))); })
      .attr("y", margin.top + (height - margin.top - margin.bottom) / 2 + margin.middle)
      .attr("width", x.bandwidth())
      .attr("height", function (d) { return ySkip(d[1]) - (margin.top + (height - margin.top - margin.bottom) / 2 + margin.middle); })
      .attr("fill", barColor)
      .attr("opacity", .1) 

      .lower()
      .on("click", function (d) {
        d3.selectAll(".obj.incl")
          .style("fill", inclusion_color)
          .attr("opacity", 0.1)
          .classed("free", true);
        d3.selectAll(".obj.skip")
          .style("fill", skipping_color)
          .attr("opacity", 0.1)

          .classed("free", true);
        d3.selectAll(".obj.nt")
          .style("font-weight", "normal")
          .classed("free", true);

        var pos = d3.select(this)
          .attr("class")
          .slice(9, -4);
        d3.select(".obj.incl.free." + pos)
          .style("fill", inclusion_highlight_color)
          .attr("opacity", 1)
          .classed("free", false);
        d3.select(".obj.skip.free." + pos)
          .style("fill", skipping_highlight_color)
          .attr("opacity", 1)

          .classed("free", false);
        d3.select(".obj.nt." + pos)
          .style("font-weight", "bold")
          .classed("free", false);
      });
  };

  if (classSelected === "incl") {
    InclusionAxis()
    SkipAxis(true)
    hovering('skip')
    // clicking('skip')
  } else if (classSelected === "skip") {
    SkipAxis()
    InclusionAxis(true)
    hovering('incl')
    // clicking('incl')
  } else {
    InclusionAxis()
    SkipAxis()
    hovering()
    // clicking()
  }
  function hovering(color = null) {
    const skipBarColor = color == 'skip' ? lightOther : skipping_color;
    const skipBarHighlightColor = color == 'skip' ? darkBackground : skipping_highlight_color;
    const inclBarColor = color == 'incl' ? lightOther : inclusion_color;
    const inclBarHighlightColor = color == 'incl' ? darkBackground : inclusion_highlight_color;
    // Hghlight on hover
    gxNu.selectAll(".tick")
      .each(function (d) {
        d3.select(this)
          .select("text")
          .attr("class", "obj nt pos_" + d);
      });

    svg_nucl.selectAll(".obj")
      .classed("free", true);

    /* Hover over a Exon view */
    svg_nucl.selectAll(".obj.free")
      .on("mouseover", function (d) {
        var pos = d3.select(this)
          .attr("class")
          .slice(9, -4);
        d3.select(".obj.incl.free." + pos)
          .attr("opacity", 0.7);  // Increase opacity on hover
        d3.select(".obj.skip.free." + pos)
          .attr("opacity", 0.7);  // Increase opacity on hover
        d3.select(".obj.nt." + pos)
          .style("font-weight", "bold");
      })
      .on("mouseleave", function (d) {
        var pos = d3.select(this)
          .attr("class")
          .slice(9, -4);
        d3.select(".obj.incl.free." + pos)
          .attr("opacity", .1);  // Reset to initial low opacity
        d3.select(".obj.skip.free." + pos)
          .attr("opacity", .1);  // Reset to initial low opacity
        d3.select(".obj.nt." + pos)
          .style("font-weight", "normal");
      });
  };
}

function nucleotideComparisonGrid(data, svg_name, classSelected = null) {
  var exon_length = data.sequence.length - 10 * 2;
  var sequence = data.sequence;
  var structs = data.structs;
  var dataIncl = data.inclusion;
  var dataSkip = data.skipping;

  svg = d3.select(svg_name)
  svg.selectAll("*").remove();

  const svgContainer = d3.select(svg_name); // Ensure you have a container with this class
  const width = svgContainer.node().clientWidth;
  const height = svgContainer.node().clientHeight;
  const heightRatio = height / 400;
  const widthRatio = width / 1000;

  var margin = { top: 10, right: 10, bottom: 10, left: 20, middle: 22 };
  var svg_nucl = d3.select(svg_name);
  // Title

  // Add X axis
  var positions = Array.from(new Array(sequence.length + 1), (x, i) => i + 1);
  var x = d3.scaleBand()
    .range([margin.left, (width - margin.right)])
    .domain(positions)
    .paddingInner(0.2)
    .paddingOuter(0.25);

  var xInclAxis = d3.axisBottom(x)
    .tickSize(1)
    .tickFormat(function (d) {
      return "";
    });

  var xSkipAxis = d3.axisTop(x)
    .tickSize(1 * heightRatio)
    .tickFormat(function (d) {
      return "";
    });

  var xNuAxis = d3.axisBottom(x)
    .tickSize(0)
    .tickFormat(function (d) {
      return "";
    });
  var gxIncl = svg_nucl.append("g")
    .attr("class", "x axis")
    .attr("font-size", `${10 * heightRatio}px`)
    .attr("opacity", 0)
    .attr("transform", "translate(0," + (margin.top + 21 + (height - margin.top - margin.bottom) / 2 - margin.middle) + ")")
    .call(xInclAxis);

  var gxSkip = svg_nucl.append("g")
    .attr("class", "x axis")
    .attr("font-size", `${10 * heightRatio}px`)
    // .attr("opacity", 0)
    .attr("transform", "translate(0," + (margin.top - 20 + (height - margin.top - margin.bottom) / 2 + margin.middle) + ")")
    .call(xSkipAxis);

  var gxNu = svg_nucl.append("g")
    .attr("class", "x axis")
    .attr("font-size", `${40 * heightRatio}px`)
    .attr("transform", "translate(0," + (margin.top + (height - margin.top - margin.bottom) / 2 - 5) + ")")
    .call(xNuAxis)

  var colors = [skipping_color, skipping_highlight_color, inclusion_color, inclusion_highlight_color]

  gxNu.selectAll("path")
    .style("stroke-width", 0);
  gxNu.selectAll(".tick")
    .each(function (d, i) {
      d3.select(this)
        .select("text")
        .attr("font-size", `${12 * widthRatio}px`)
        .attr("fill", (d <= flanking_length || d > flanking_length + exon_length) ? line_color : nucleotide_color)
    });
  gxNu.selectAll('.tick text').style("font-size", "6px");

  gxSkip.selectAll('.tick text').style("font-size", "6px");
  gxIncl.selectAll('.tick text').style("font-size", "6px");
  var max_incl = d3.max(Object.values(data.inclusion));
  var max_skip = d3.max(Object.values(data.skipping));

  var max_strength = d3.max([max_incl, max_skip]);

  var yIncl = d3.scaleLinear()
    .domain([0, max_strength])
    .range([margin.top + 21 + (height - margin.top - margin.bottom) / 2 - margin.middle, margin.top]);
  var ySkip = d3.scaleLinear()
    .domain([0, max_strength])
    .range([margin.top - 18 + (height - margin.top - margin.bottom) / 2 + margin.middle, height - margin.bottom]);



  const InclusionAxis = (color = false) => {
    const barColor = color ? lightOther : inclusion_color;
    const barHighlightColor = color ? darkBackground : inclusion_highlight_color;
    const lineColor = color ? lightOther : inclusion_color;
    const lineHighlightColor = color ? darkBackground : inclusion_highlight_color;

    var extendedData = [];
    Object.entries(dataIncl).forEach(function (d, i, arr) {
      var xValue = parseInt(d[0].slice(4));
      extendedData.push([xValue, d[1]]);
      if (i < arr.length - 1) {
        extendedData.push([xValue + 1, d[1]]);
      } else {
        // Add twoxtra points to close the path
        extendedData.push([xValue + 1, d[1]]);
        extendedData.push([xValue + 1, 0]);  // Close to y=0
        extendedData.push([xValue + 2, 0]);  // Extend one more step at y=0
      }
    });

    // Draw the line along the edges of the bars
    var line = d3.line()
      .x(function (d) { return x(d[0]); })
      .y(function (d) { return yIncl(d[1]); })
      .curve(d3.curveStepAfter);

    svg_nucl.append("path")
      .datum(extendedData)
      .attr("class", "line incl original")
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", lineHighlightColor)
      .style("stroke-width", "2px"); // Add px and !important if necessary

  }

  const SkipAxis = (color = false) => {
    const lineColor = color ? lightOther : skipping_color;
    const lineHighlightColor = color ? darkBackground : skipping_highlight_color;

    const barColor = color ? lightOther : skipping_color;
    const barHighlightColor = color ? darkBackground : skipping_highlight_color;

    var extendedSkipData = [];
    Object.entries(dataSkip).forEach(function (d, i, arr) {
      var xValue = parseInt(d[0].slice(4));
      extendedSkipData.push([xValue, d[1]]);
      if (i < arr.length - 1) {
        extendedSkipData.push([xValue + 1, d[1]]);
      } else {
        // Add two extra points to close the path
        extendedSkipData.push([xValue + 1, d[1]]);
        extendedSkipData.push([xValue + 1, 0]);  // Close to y=0
        extendedSkipData.push([xValue + 2, 0]);  // Extend one more step at y=0
      }
    });

    // The rest of the code remains the same
    var line = d3.line()
      .x(function (d) { return x(d[0]); })
      .y(function (d) { return ySkip(d[1]); })
      .curve(d3.curveStepAfter)
      .defined(function (d) { return !isNaN(x(d[0])) && !isNaN(ySkip(d[1])); });

    svg_nucl.append("path")
      .datum(extendedSkipData)
      .attr("class", "line skip original")
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", lineHighlightColor)
      .style("stroke-width", "2px");

  };

  if (classSelected === "incl") {
    InclusionAxis()
    SkipAxis(true)
    hovering('skip')
    // clicking('skip')
  } else if (classSelected === "skip") {
    SkipAxis()
    InclusionAxis(true)
    hovering('incl')
    // clicking('incl')
  } else {
    InclusionAxis()
    SkipAxis()
    hovering()
    // clicking()
  }
  function hovering(color = null) {
    const skipBarColor = color == 'skip' ? lightOther : skipping_color;
    const skipBarHighlightColor = color == 'skip' ? darkBackground : skipping_highlight_color;
    const inclBarColor = color == 'incl' ? lightOther : inclusion_color;
    const inclBarHighlightColor = color == 'incl' ? darkBackground : inclusion_highlight_color;
    // Hghlight on hover
    gxNu.selectAll(".tick")
      .each(function (d) {
        d3.select(this)
          .select("text")
          .attr("class", "obj nt pos_" + d);
      });

    svg_nucl.selectAll(".obj")
      .classed("free", true);

    /* Hover over a Exon view */
    svg_nucl.selectAll(".obj.free")
      .on("mouseover", function (d) {
        var pos = d3.select(this)
          .attr("class")
          .slice(9, -4);
        d3.select(".obj.incl.free." + pos)
          .attr("opacity", 0.7);  // Increase opacity on hover
        d3.select(".obj.skip.free." + pos)
          .attr("opacity", 0.7);  // Increase opacity on hover
        d3.select(".obj.nt." + pos)
          .style("font-weight", "bold");
      })
      .on("mouseleave", function (d) {
        var pos = d3.select(this)
          .attr("class")
          .slice(9, -4);
        d3.select(".obj.incl.free." + pos)
          .attr("opacity", .1);  // Reset to initial low opacity
        d3.select(".obj.skip.free." + pos)
          .attr("opacity", .1);  // Reset to initial low opacity
        d3.select(".obj.nt." + pos)
          .style("font-weight", "normal");
      });
  };
}