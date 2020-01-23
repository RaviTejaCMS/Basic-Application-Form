(function() {
  $(function() {
    var handleFileSelect, swapIcon;
    handleFileSelect = function(evt) {
      var file, files, reader;
      files = evt.target.files;
      file = files[0];
      if (files && file) {
        reader = new FileReader;
        reader.trigger = this.id;
        reader.filename = file.name;
        reader.onload = function(readerEvt) {
          var binaryString;
          binaryString = readerEvt.target.result;
          if (this.trigger === "cover-letter") {
            $('.js-cover-letter__textarea').val(this.filename + ":" + btoa(binaryString));
          } else if (this.trigger === "cv") {
            $('.js-cv__textarea').val(this.filename + ":" + btoa(binaryString));
          }
          swapIcon(this.trigger);
        };
        if (file.size > 10000000) {
          alert("File too large. Please select a file under 10MB.");
          $(this).val(null);
        } else if (!/\.(doc|docx|pdf)$/i.test(file.name)) {
          alert("<p>Filetype not allowed. Please use .doc, .docx, .pdf only.</p>");
          $(this).val(null);
        } else {
          reader.readAsBinaryString(file);
        }
      }
    };
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      document.getElementById('cover-letter').addEventListener('change', handleFileSelect, false);
      document.getElementById('cv').addEventListener('change', handleFileSelect, false);
    } else {
      alert('The File APIs are not fully supported in this browser.');
    }
    return swapIcon = function(id) {
      return $('label[for=' + id + ']').css({
        "background-color": "#006699"
      }).children('i.fa').removeClass('fa-upload').addClass('fa-check-square-o');
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxDQUFBLENBQUUsUUFBQSxDQUFBLENBQUE7QUFDQSxRQUFBLGdCQUFBLEVBQUE7SUFBQSxnQkFBQSxHQUFtQixRQUFBLENBQUMsR0FBRCxDQUFBO0FBQ2pCLFVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQTtNQUFBLEtBQUEsR0FBUSxHQUFHLENBQUMsTUFBTSxDQUFDO01BQ25CLElBQUEsR0FBTyxLQUFNLENBQUEsQ0FBQTtNQUViLElBQUcsS0FBQSxJQUFVLElBQWI7UUFDRSxNQUFBLEdBQVMsSUFBSTtRQUNiLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLElBQUksQ0FBQztRQUN0QixNQUFNLENBQUMsUUFBUCxHQUFrQixJQUFJLENBQUM7UUFFdkIsTUFBTSxDQUFDLE1BQVAsR0FBZ0IsUUFBQSxDQUFDLFNBQUQsQ0FBQTtBQUNkLGNBQUE7VUFBQSxZQUFBLEdBQWUsU0FBUyxDQUFDLE1BQU0sQ0FBQztVQUVoQyxJQUFHLElBQUksQ0FBQyxPQUFMLEtBQWdCLGNBQW5CO1lBQ0UsQ0FBQSxDQUFFLDRCQUFGLENBQStCLENBQUMsR0FBaEMsQ0FBb0MsSUFBSSxDQUFDLFFBQUwsR0FBZ0IsR0FBaEIsR0FBc0IsSUFBQSxDQUFLLFlBQUwsQ0FBMUQsRUFERjtXQUFBLE1BRUssSUFBRyxJQUFJLENBQUMsT0FBTCxLQUFnQixJQUFuQjtZQUNILENBQUEsQ0FBRSxrQkFBRixDQUFxQixDQUFDLEdBQXRCLENBQTBCLElBQUksQ0FBQyxRQUFMLEdBQWdCLEdBQWhCLEdBQXNCLElBQUEsQ0FBSyxZQUFMLENBQWhELEVBREc7O1VBR0wsUUFBQSxDQUFTLElBQUksQ0FBQyxPQUFkO1FBUmM7UUFXaEIsSUFBRyxJQUFJLENBQUMsSUFBTCxHQUFZLE9BQWY7VUFDRSxLQUFBLENBQU0sd0RBQU47VUFDQSxDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsR0FBUixDQUFZLElBQVosRUFGRjtTQUFBLE1BSUssSUFBSSxDQUFFLG9CQUFxQixDQUFDLElBQXZCLENBQTRCLElBQUksQ0FBQyxJQUFqQyxDQUFMO1VBQ0gsS0FBQSxDQUFNLGlFQUFOO1VBQ0EsQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLEdBQVIsQ0FBWSxJQUFaLEVBRkc7U0FBQSxNQUFBO1VBS0gsTUFBTSxDQUFDLGtCQUFQLENBQTBCLElBQTFCLEVBTEc7U0FwQlA7O0lBSmlCO0lBZ0NuQixJQUFHLE1BQU0sQ0FBQyxJQUFQLElBQWdCLE1BQU0sQ0FBQyxVQUF2QixJQUFzQyxNQUFNLENBQUMsUUFBN0MsSUFBMEQsTUFBTSxDQUFDLElBQXBFO01BQ0UsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBdUMsQ0FBQyxnQkFBeEMsQ0FBeUQsUUFBekQsRUFBbUUsZ0JBQW5FLEVBQXFGLEtBQXJGO01BQ0EsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsSUFBeEIsQ0FBNkIsQ0FBQyxnQkFBOUIsQ0FBK0MsUUFBL0MsRUFBeUQsZ0JBQXpELEVBQTJFLEtBQTNFLEVBRkY7S0FBQSxNQUFBO01BSUUsS0FBQSxDQUFNLHdEQUFOLEVBSkY7O1dBTUEsUUFBQSxHQUFXLFFBQUEsQ0FBQyxFQUFELENBQUE7YUFFVCxDQUFBLENBQUUsWUFBQSxHQUFlLEVBQWYsR0FBb0IsR0FBdEIsQ0FBMEIsQ0FBQyxHQUEzQixDQUErQjtRQUFDLGtCQUFBLEVBQXFCO01BQXRCLENBQS9CLENBQWdFLENBQUMsUUFBakUsQ0FBMEUsTUFBMUUsQ0FBaUYsQ0FBQyxXQUFsRixDQUE4RixXQUE5RixDQUEwRyxDQUFDLFFBQTNHLENBQW9ILG1CQUFwSDtJQUZTO0VBdkNYLENBQUY7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIiQgLT5cbiAgaGFuZGxlRmlsZVNlbGVjdCA9IChldnQpIC0+XG4gICAgZmlsZXMgPSBldnQudGFyZ2V0LmZpbGVzXG4gICAgZmlsZSA9IGZpbGVzWzBdXG5cbiAgICBpZiBmaWxlcyBhbmQgZmlsZVxuICAgICAgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXJcbiAgICAgIHJlYWRlci50cmlnZ2VyID0gdGhpcy5pZFxuICAgICAgcmVhZGVyLmZpbGVuYW1lID0gZmlsZS5uYW1lXG5cbiAgICAgIHJlYWRlci5vbmxvYWQgPSAocmVhZGVyRXZ0KSAtPlxuICAgICAgICBiaW5hcnlTdHJpbmcgPSByZWFkZXJFdnQudGFyZ2V0LnJlc3VsdFxuXG4gICAgICAgIGlmIHRoaXMudHJpZ2dlciA9PSBcImNvdmVyLWxldHRlclwiXG4gICAgICAgICAgJCgnLmpzLWNvdmVyLWxldHRlcl9fdGV4dGFyZWEnKS52YWwodGhpcy5maWxlbmFtZSArIFwiOlwiICsgYnRvYShiaW5hcnlTdHJpbmcpKVxuICAgICAgICBlbHNlIGlmIHRoaXMudHJpZ2dlciA9PSBcImN2XCJcbiAgICAgICAgICAkKCcuanMtY3ZfX3RleHRhcmVhJykudmFsKHRoaXMuZmlsZW5hbWUgKyBcIjpcIiArIGJ0b2EoYmluYXJ5U3RyaW5nKSlcblxuICAgICAgICBzd2FwSWNvbih0aGlzLnRyaWdnZXIpXG5cbiAgICAgICAgcmV0dXJuXG4gICAgICBpZiBmaWxlLnNpemUgPiAxMDAwMDAwXG4gICAgICAgIGFsZXJ0KFwiPHA+RmlsZSB0b28gbGFyZ2UuIFBsZWFzZSBzZWxlY3QgYSBmaWxlIHVuZGVyIDJNQi48L3A+XCIpXG4gICAgICAgICQodGhpcykudmFsKG51bGwpXG4gICAgICAgIFxuICAgICAgZWxzZSBpZiAoISgvXFwuKGRvY3xkb2N4fHBkZikkL2kpLnRlc3QoZmlsZS5uYW1lKSlcbiAgICAgICAgYWxlcnQoXCI8cD5GaWxldHlwZSBub3QgYWxsb3dlZC4gUGxlYXNlIHVzZSAuZG9jLCAuZG9jeCwgLnBkZiBvbmx5LjwvcD5cIilcbiAgICAgICAgJCh0aGlzKS52YWwobnVsbClcbiAgICAgICAgXG4gICAgICBlbHNlXG4gICAgICAgIHJlYWRlci5yZWFkQXNCaW5hcnlTdHJpbmcgZmlsZVxuICAgIHJldHVyblxuXG4gIGlmIHdpbmRvdy5GaWxlIGFuZCB3aW5kb3cuRmlsZVJlYWRlciBhbmQgd2luZG93LkZpbGVMaXN0IGFuZCB3aW5kb3cuQmxvYlxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3Zlci1sZXR0ZXInKS5hZGRFdmVudExpc3RlbmVyICdjaGFuZ2UnLCBoYW5kbGVGaWxlU2VsZWN0LCBmYWxzZVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdicpLmFkZEV2ZW50TGlzdGVuZXIgJ2NoYW5nZScsIGhhbmRsZUZpbGVTZWxlY3QsIGZhbHNlXG4gIGVsc2VcbiAgICBhbGVydCAnVGhlIEZpbGUgQVBJcyBhcmUgbm90IGZ1bGx5IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXIuJ1xuICAgIFxuICBzd2FwSWNvbiA9IChpZCkgLT5cblxuICAgICQoJ2xhYmVsW2Zvcj0nICsgaWQgKyAnXScpLmNzcyh7XCJiYWNrZ3JvdW5kLWNvbG9yXCIgOiBcIiMwMDY2OTlcIn0pLmNoaWxkcmVuKCdpLmZhJykucmVtb3ZlQ2xhc3MoJ2ZhLXVwbG9hZCcpLmFkZENsYXNzKCdmYS1jaGVjay1zcXVhcmUtbycpIl19
//# sourceURL=coffeescript