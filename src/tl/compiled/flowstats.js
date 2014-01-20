(function(){dust.register("flowstats",body_0);function body_0(chk,ctx){return chk.write("<div class=\"row\"><div class=\"col-xs-12\"><h4>Resources</h4><table class=\"table table-bordered table-condensed table-striped\"><thead><tr><th class=\"property-key\">Resource</th><th class=\"property-key\">Value</th><th>Job Name</th></tr></thead><tbody><tr><td class=\"property-key\">Max Map Slots</td><td>").reference(ctx.getPath(false,["stats","mapSlots","max"]),ctx,"h").write("</td><td>").reference(ctx.getPath(false,["stats","mapSlots","job"]),ctx,"h").write("</td></tr><tr><td class=\"property-key\">Max Reduce Slots</td><td>").reference(ctx.getPath(false,["stats","reduceSlots","max"]),ctx,"h").write("</td><td>").reference(ctx.getPath(false,["stats","reduceSlots","job"]),ctx,"h").write("</td></tr><tr><td class=\"property-key\">Total Map Slots</td><td colspan=\"2\">").reference(ctx.getPath(false,["stats","totalMapSlots"]),ctx,"h").write("</td></tr><tr><td class=\"property-key\">Total Reduce Slots</td><td colspan=\"2\">").reference(ctx.getPath(false,["stats","totalReduceSlots"]),ctx,"h").write("</td></tr></tbody></table></div></div><div class=\"row\"><div class=\"col-xs-12\"><h4>Parameters</h4><table class=\"table table-bordered table-condensed table-striped\"><thead><tr><th class=\"property-key\">Parameter</th><th class=\"property-key\">Value</th><th>Job Name</th></tr></thead><tbody><tr><td class=\"property-key\">Max <code>-Xmx</code></td><td>").reference(ctx.getPath(false,["stats","xmx","str"]),ctx,"h").write("</td><td>").reference(ctx.getPath(false,["stats","xmx","job"]),ctx,"h").write("</td></tr><tr><td class=\"property-key\">Max <code>-Xms</code></td>").exists(ctx.getPath(false,["stats","xms","set"]),ctx,{"else":body_1,"block":body_2},null).write("</tr><tr><td class=\"property-key\">Max <code>mapred.job.map.memory.mb</code></td><td>").reference(ctx.getPath(false,["stats","jobMapMemoryMb","max"]),ctx,"h").write("</td><td>").reference(ctx.getPath(false,["stats","jobMapMemoryMb","job"]),ctx,"h").write("</td></tr><tr><td class=\"property-key\">Max <code>mapred.job.reduce.memory.mb</code></td><td>").reference(ctx.getPath(false,["stats","jobReduceMemoryMb","max"]),ctx,"h").write("</td><td>").reference(ctx.getPath(false,["stats","jobReduceMemoryMb","job"]),ctx,"h").write("</td></tr><tr><td class=\"property-key\">Max Distributed Cache</td>").exists(ctx.getPath(false,["stats","distributedCache","using"]),ctx,{"else":body_3,"block":body_4},null).write("</tr></tbody></table></div></div><div class=\"row\"><div class=\"col-xs-12\"><h4>Counters</h4><table class=\"table table-bordered table-condensed\"><thead><tr><th class=\"property-key\">Parameter</th><th class=\"property-key\">Value</th><th>Job Name</th></tr></thead><tbody><tr><td class=\"property-key\">Max <code>FILE_BYTES_READ</code></td><td>").reference(ctx.getPath(false,["stats","fileBytesRead","max"]),ctx,"h").write("</td><td>").reference(ctx.getPath(false,["stats","fileBytesRead","job"]),ctx,"h").write("</td></tr><tr><td class=\"property-key\">Max <code>HDFS_BYTES_READ</code></td><td>").reference(ctx.getPath(false,["stats","hdfsBytesRead","max"]),ctx,"h").write("</td><td>").reference(ctx.getPath(false,["stats","hdfsBytesRead","job"]),ctx,"h").write("</td></tr><tr><td class=\"property-key\">Max <code>FILE_BYTES_WRITTEN</code></td><td>").reference(ctx.getPath(false,["stats","fileBytesWritten","max"]),ctx,"h").write("</td><td>").reference(ctx.getPath(false,["stats","fileBytesWritten","job"]),ctx,"h").write("</td></tr><tr><td class=\"property-key\">Max <code>HDFS_BYTES_WRITTEN</code></td><td>").reference(ctx.getPath(false,["stats","hdfsBytesWritten","max"]),ctx,"h").write("</td><td>").reference(ctx.getPath(false,["stats","hdfsBytesWritten","job"]),ctx,"h").write("</td></tr></tbody></table></div></div>");}function body_1(chk,ctx){return chk.write("<td colspan=\"2\">Not set.</td>");}function body_2(chk,ctx){return chk.write("<td>").reference(ctx.getPath(false,["stats","xms","str"]),ctx,"h").write("</td><td>").reference(ctx.getPath(false,["stats","xms","job"]),ctx,"h").write("</td>");}function body_3(chk,ctx){return chk.write("<td colspan=\"2\">Not used.</td>");}function body_4(chk,ctx){return chk.write("<td>").reference(ctx.getPath(false,["stats","distributedCache","max"]),ctx,"h").write("</td><td>").reference(ctx.getPath(false,["stats","distributedCache","job"]),ctx,"h").write("</td>");}return body_0;})();